import React from 'react';

import { StyledHeading, HeadingTypes } from './Heading.style';

interface HeadingProps {
  el?: HeadingTypes;
  children: React.ReactNode;
}
const Heading = ({ el = 'h1', children }: HeadingProps) => (
  <StyledHeading as={el} el={el}>
    {children}
  </StyledHeading>
);

export default Heading;
