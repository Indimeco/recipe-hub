import React, { TextareaHTMLAttributes } from 'react';

import { StyledTextarea } from './Textarea.style';

const Textarea = ({ placeholder, onChange, value }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <StyledTextarea {...{ placeholder, onChange, value }} />
);

export default Textarea;
