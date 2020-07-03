import React, { InputHTMLAttributes } from 'react';

import { StyledInput } from './Input.style';
import { InputProps } from './types';

export const Input: React.FunctionComponent<InputHTMLAttributes<HTMLInputElement> & InputProps> = ({
  placeholder,
  id,
  inline,
  onChange,
  value,
  width,
  name,
  forwardedRef,
  fontSize,
  ...restProps
}) => (
  <StyledInput
    {...{ placeholder, id, inline, onChange, value, width, name, fontSize, ...restProps }}
    ref={forwardedRef}
  />
);

export default Input;
