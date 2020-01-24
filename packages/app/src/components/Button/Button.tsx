import React, { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './Button.style';

export interface ButtonProps {
  inlineStyle?: boolean;
}

const Button = ({
  inlineStyle,
  type,
  onClick,
  children,
  className,
}: ButtonProps & ButtonHTMLAttributes<any>): React.ReactElement => (
  <StyledButton inlineStyle={inlineStyle} type={type} onClick={onClick} className={className}>
    {children}
  </StyledButton>
);

export default Button;
