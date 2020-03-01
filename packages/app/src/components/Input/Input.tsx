import React from 'react';

import { StyledInput } from './Input.style';

interface InputProps {
  inline?: boolean;
  width?: 'small' | 'large';
  'data-testid'?: string;
  forwardedRef?: any;
}
const Input = ({
  placeholder,
  id,
  inline,
  onChange,
  value,
  width,
  name,
  forwardedRef,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & InputProps) => (
  <StyledInput
    {...{ placeholder, id, inline, onChange, value, width, name, 'data-testid': rest['data-testid'] }}
    ref={forwardedRef}
  />
);

export default Input;
