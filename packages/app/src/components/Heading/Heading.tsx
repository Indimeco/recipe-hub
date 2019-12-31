import React from 'react';

import { StyledHeading } from './Heading.style';

interface HeadingProps {
  el?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
}
const Heading = ({ el, children }: HeadingProps) => <StyledHeading as={el}>{children}</StyledHeading>;

export default Heading;
