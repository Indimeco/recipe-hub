import React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
  inline: boolean;
  width?: 'small' | 'large';
}
const Input = ({ placeholder, inline, onChange, width }: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => (
  <StyledInput {...{ placeholder, inline, onChange, width }} />
);

export default Input;
