import React, { TextareaHTMLAttributes } from 'react';

import { StyledTextarea } from './Textarea.style';

const Textarea = ({ placeholder, id, onChange, value }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <StyledTextarea {...{ placeholder, id, onChange, value }} />
);

export default Textarea;
