import React, { useState } from 'react';

import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';
import Image from '../../../components/Image/Image';
import { Recipe } from '../../../../../../types';

interface RecipeImageProps {
  previewImage: Recipe['previewImage'];
  handleSave: (payload: { previewImage: string }) => void;
}
export const RecipeImage: React.FunctionComponent<RecipeImageProps> = ({ previewImage, handleSave }) => {
  const [isEditMode, toggleEdit] = useState(false);
  const [inputImage, setinputImage] = useState(previewImage || '');

  const save = () => {
    handleSave({
      previewImage: inputImage || '',
    });
    toggleEdit(false);
  };

  const handleEditMode = (setEditMode: boolean) => {
    if (setEditMode === false) {
      setinputImage(previewImage || '');
    }
    toggleEdit(setEditMode);
  };

  return (
    <ToggleEdit edit={isEditMode} onSave={save} onClick={() => handleEditMode(!isEditMode)}>
      {isEditMode ? (
        <label htmlFor="RecipeImage__input">
          Preview image
          <Input id="RecipeImage__input" value={inputImage} onChange={e => setinputImage(e.target.value)} />
        </label>
      ) : (
        <Image src={inputImage} alt="Recipe display image" />
      )}
    </ToggleEdit>
  );
};

export default RecipeImage;
