import React, { useState } from 'react';

import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Textarea from '../../../components/Textarea/Textarea';
import { Recipe } from '../../../../../../types';

interface RecipeDirectionsProps {
  directions: Recipe['directions'];
  handleSave: (payload: { directions: string }) => void;
}
export const RecipeDirections: React.FunctionComponent<RecipeDirectionsProps> = ({ directions, handleSave }) => {
  const [isEditMode, toggleEdit] = useState(false);
  const [inputDirections, setInputDirections] = useState(directions || '');

  const save = () => {
    handleSave({
      directions: inputDirections || '',
    });
    toggleEdit(false);
  };

  return (
    <ToggleEdit edit={isEditMode} onSave={save} onClick={() => toggleEdit(!isEditMode)}>
      {isEditMode ? (
        <label htmlFor="RecipeDirections__textarea">
          Directions
          <Textarea
            id="RecipeDirections__textarea"
            value={inputDirections}
            onChange={e => setInputDirections(e.target.value)}
          />
        </label>
      ) : (
        <>
          {inputDirections ? (
            // eslint-disable-next-line
            inputDirections.split('\n').map((x, index) => <p key={`directions-${index}`}>{x}</p>)
          ) : (
            <p>No directions needed? No problem!</p>
          )}
        </>
      )}
    </ToggleEdit>
  );
};

export default RecipeDirections;
