import React, { useState, useEffect } from 'react';

import Textarea from '../../../components/Textarea/Textarea';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';

interface RecipeDirectionsProps extends RecipeDetailControl {
  directions: Recipe['directions'];
}
export const RecipeDirections: React.FunctionComponent<RecipeDirectionsProps> = ({
  directions,
  isEditMode,
  dispatch,
}) => {
  const [inputDirections, setInputDirections] = useState(directions || '');

  useEffect(() => {
    if (isEditMode === false) {
      setInputDirections(directions || '');
    }
  }, [directions, isEditMode]);

  useEffect(() => {
    if (isEditMode === true) {
      dispatch({
        type: 'update',
        value: {
          directions: inputDirections || '',
        },
      });
    }
  }, [isEditMode, inputDirections, dispatch]);

  return (
    <>
      {isEditMode ? (
        <label htmlFor="RecipeDirections__textarea">
          Directions
          <Textarea
            id="RecipeDirections__textarea"
            value={inputDirections}
            onChange={(e) => setInputDirections(e.target.value)}
          />
        </label>
      ) : (
        <>
          {directions ? (
            // eslint-disable-next-line
            directions.split('\n').map((x, index) => <p key={`directions-${index}`}>{x}</p>)
          ) : (
            <p>No directions needed? No problem!</p>
          )}
        </>
      )}
    </>
  );
};

export default RecipeDirections;
