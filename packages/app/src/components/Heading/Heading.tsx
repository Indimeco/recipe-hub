import React, { AllHTMLAttributes } from 'react';

import { StyledHeading, HeadingTypes } from './Heading.style';

interface HeadingProps {
  el?: any;
  level?: HeadingTypes;
}
export const Heading: React.FunctionComponent<AllHTMLAttributes<any> & HeadingProps> = ({
  el = 'h1',
  level,
  children,
  ...restProps
}) => (
  <StyledHeading as={el} likeEl={level || el} {...restProps}>
    {children}
  </StyledHeading>
);

export default Heading;
