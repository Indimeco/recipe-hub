import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.style';

export interface ButtonProps {
  inlineStyle?: boolean;
  circle?: boolean;
}

export const Button = ({
  inlineStyle,
  circle,
  onClick,
  children,
  ...restProps
}: ButtonProps & ButtonHTMLAttributes<any>): React.ReactElement => (
  <StyledButton inlineStyle={inlineStyle} circle={circle} onClick={onClick} {...restProps}>
    {children}
  </StyledButton>
);

export default Button;
