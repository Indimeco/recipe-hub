import React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
  inline?: boolean;
  width?: 'small' | 'large';
}
const Input = ({
  placeholder,
  id,
  inline,
  onChange,
  value,
  width,
  name,
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => (
  <StyledInput {...{ placeholder, id, inline, onChange, value, width, name }} />
);

export default Input;
