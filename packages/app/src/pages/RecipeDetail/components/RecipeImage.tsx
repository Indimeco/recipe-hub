import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Input from '../../../components/Input/Input';
import Image from '../../../components/Image/Image';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';
import { ReactComponent as RawLogo } from '../../../assets/RecipeHubOptimized.svg';
import { SPACE_MEGA } from '../../../styles/base';

interface RecipeImageProps extends RecipeDetailControl {
  previewImage: Recipe['previewImage'];
}

const ImagePlaceholder = styled(RawLogo)`
  width: ${SPACE_MEGA};
  height: ${SPACE_MEGA};
`;

type PreviewRendererProps = { previewImage?: Recipe['previewImage'] };
const PreviewRenderer: React.FunctionComponent<PreviewRendererProps> = ({ previewImage }) => {
  if (!previewImage) return <ImagePlaceholder data-testid="Image__Placeholder" />;
  return <Image src={previewImage} alt="Recipe display image" />;
};

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
        <PreviewRenderer previewImage={previewImage} />
      )}
    </>
  );
};

export default RecipeImage;
