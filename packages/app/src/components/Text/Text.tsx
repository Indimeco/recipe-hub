import React, { AllHTMLAttributes } from 'react';

import { StyledText } from './Text.style';

interface TextProps {
  el?: any;
  space?: boolean;
}
export const Text: React.FunctionComponent<AllHTMLAttributes<any> & TextProps> = ({
  el = 'span',
  space = false,
  children,
  ...restProps
}) => (
  <StyledText as={el} space={space} {...restProps}>
    {children}
  </StyledText>
);
