import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.style';

export interface ButtonProps extends ButtonHTMLAttributes<any> {
  inlineStyle?: boolean;
  circle?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  inlineStyle = false,
  circle = true,
  size = 'small',
  type = 'button',
  onClick,
  children,
  ...restProps
}: ButtonProps): React.ReactElement => (
  <StyledButton {...{ inlineStyle, circle, size, type, onClick }} {...restProps}>
    {children}
  </StyledButton>
);

export default Button;
