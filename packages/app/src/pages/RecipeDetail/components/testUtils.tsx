import React, { useState } from 'react';

import { RecipeDetailControl } from '../types';

export const recipeDetailControlProps: RecipeDetailControl = {
  isEditMode: false,
  dispatch: jest.fn,
};

export const EditableRecipeDetailControl: React.FunctionComponent = ({ children }) => {
  const [isEditMode, toggleIsEditMode] = useState(false);
  const child = React.Children.only(children);
  if (!child) throw new Error('Invalid child in EditableRecipeDetailControl');
  const clone = React.cloneElement(child as React.ReactElement, { isEditMode });

  return (
    <>
      <button onClick={() => toggleIsEditMode(!isEditMode)} type="button">
        {isEditMode ? 'Undo' : 'Edit'}
      </button>
      {clone}
    </>
  );
};
