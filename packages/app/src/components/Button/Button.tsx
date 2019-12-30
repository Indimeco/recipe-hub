import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.style';

export interface ButtonProps {
  inlineStyle?: boolean;
}

const Button = ({ inlineStyle, type, children }: ButtonProps & ButtonHTMLAttributes<any>): React.ReactElement => (
  <StyledButton inlineStyle={inlineStyle} type={type}>
    {children}
  </StyledButton>
);

export default Button;
