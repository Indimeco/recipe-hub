import React from 'react';

import { StyledHeading, HeadingTypes } from './Heading.style';

interface HeadingProps {
  el?: any;
  likeEl?: HeadingTypes;
  children: React.ReactNode;
}
const Heading = ({ el = 'h1', likeEl, children }: HeadingProps) => (
  <StyledHeading as={el} likeEl={likeEl || el}>
    {children}
  </StyledHeading>
);

export default Heading;
