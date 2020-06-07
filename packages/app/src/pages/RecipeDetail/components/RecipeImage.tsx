import React, { useState, useEffect } from 'react';

import Input from '../../../components/Input/Input';
import Image from '../../../components/Image/Image';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';

interface RecipeImageProps extends RecipeDetailControl {
  previewImage: Recipe['previewImage'];
}
export const RecipeImage: React.FunctionComponent<RecipeImageProps> = ({ previewImage, dispatch, isEditMode }) => {
  const [inputImage, setinputImage] = useState(previewImage || '');

  useEffect(() => {
    if (isEditMode === false) {
      setinputImage(previewImage || '');
    }
  }, [previewImage, isEditMode]);

  useEffect(() => {
    if (isEditMode === true) {
      dispatch({
        type: 'update',
        value: {
          previewImage: inputImage || '',
        },
      });
    }
  }, [isEditMode, inputImage, dispatch]);

  return (
    <>
      {isEditMode ? (
        <label htmlFor="RecipeImage__input">
          Preview image
          <Input id="RecipeImage__input" value={inputImage} onChange={(e) => setinputImage(e.target.value)} />
        </label>
      ) : (
        <Image src={previewImage} alt="Recipe display image" />
      )}
    </>
  );
};

export default RecipeImage;
