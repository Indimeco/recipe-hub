import React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
  inline: boolean;
  width?: 'small' | 'large';
}
const Input = ({ placeholder, id, inline, onChange, value, width }: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => (
  <StyledInput {...{ placeholder, id, inline, onChange, value, width }} />
);

export default Input;
