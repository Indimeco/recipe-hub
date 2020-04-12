import React, { useState } from 'react';

import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';
import Heading from '../../../components/Heading/Heading';
import { Recipe } from '../../../../../../types';

interface RecipeNameProps {
  name: Recipe['name'];
  handleSave: (payload: { name: string }) => void;
}
export const RecipeName: React.FunctionComponent<RecipeNameProps> = ({ name, handleSave }) => {
  const [isEditMode, toggleEdit] = useState(false);
  const [inputName, setInputName] = useState(name);

  const save = () => {
    handleSave({
      name: inputName || 'Untitled recipe',
    });
    toggleEdit(false);
  };

  const handleEditMode = (setEditMode: boolean) => {
    if (setEditMode === false) {
      setInputName(name);
    }
    toggleEdit(setEditMode);
  };

  return (
    <ToggleEdit edit={isEditMode} onSave={save} onClick={() => handleEditMode(!isEditMode)}>
      {isEditMode ? (
        <label htmlFor="RecipeName__input">
          Recipe name
          <Input id="RecipeName__input" value={inputName} onChange={e => setInputName(e.target.value)} />
        </label>
      ) : (
        <Heading el="h2">{inputName || 'Untitled recipe'}</Heading>
      )}
    </ToggleEdit>
  );
};

export default RecipeName;
