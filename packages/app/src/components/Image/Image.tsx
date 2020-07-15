import React from 'react';

import { ImageWrapper, StyledImage } from './Image.style';

export const Image: React.FunctionComponent<React.ImgHTMLAttributes<HTMLImageElement>> = ({ ...restProps }) => {
  return (
    <ImageWrapper>
      <StyledImage {...restProps} />
    </ImageWrapper>
  );
};

export default Image;
