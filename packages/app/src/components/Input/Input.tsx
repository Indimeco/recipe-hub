import React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
  inline?: boolean;
  width?: 'small' | 'large';
  'data-testid'?: string;
}
const Input = ({
  placeholder,
  id,
  inline,
  onChange,
  value,
  width,
  name,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => (
  <StyledInput {...{ placeholder, id, inline, onChange, value, width, name, 'data-testid': rest['data-testid'] }} />
);

export default Input;
