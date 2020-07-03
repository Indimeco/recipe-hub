import React, { useState, useEffect } from 'react';

import Input from '../../../components/Input/Input';
import Heading from '../../../components/Heading/Heading';
import SrText from '../../../components/SrText/SrText';
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
        <Heading el="label" level="h2" htmlFor="RecipeName__input">
          <SrText>Recipe name</SrText>
          <Input
            id="RecipeName__input"
            placeholder="Recipe name"
            fontSize="large"
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
        </Heading>
      ) : (
        <Heading el="h2">{name || 'Untitled recipe'}</Heading>
      )}
    </>
  );
};

export default RecipeName;
