import React, { useState, useEffect } from 'react';

import Input from '../../../components/Input/Input';
import Heading from '../../../components/Heading/Heading';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';

interface RecipeNameProps extends RecipeDetailControl {
  name: Recipe['name'];
}
export const RecipeName: React.FunctionComponent<RecipeNameProps> = ({ name, isEditMode, dispatch }) => {
  const [inputName, setInputName] = useState(name);

  useEffect(() => {
    if (isEditMode === false) {
      setInputName(name);
    }
  }, [name, isEditMode]);

  useEffect(() => {
    if (isEditMode === true) {
      dispatch({
        type: 'update',
        value: {
          name: inputName || 'Untitled recipe',
        },
      });
    }
  }, [isEditMode, inputName, dispatch]);

  return (
    <>
      {isEditMode ? (
        <label htmlFor="RecipeName__input">
          Recipe name
          <Input id="RecipeName__input" value={inputName} onChange={(e) => setInputName(e.target.value)} />
        </label>
      ) : (
        <Heading el="h2">{name || 'Untitled recipe'}</Heading>
      )}
    </>
  );
};

export default RecipeName;
