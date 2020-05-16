import React from 'react';

import { StyledAnchor, StyledLinkButton, StyledLink } from './Link.style';

interface LinkProps {
  invertStyle?: boolean;
}

export const Link: React.FunctionComponent<any & LinkProps> = ({ children, type, ...restProps }) => {
  if ('href' in restProps) {
    return (
      <StyledAnchor type={type} {...restProps}>
        {children}
      </StyledAnchor>
    );
  }

  if ('to' in restProps) {
    return <StyledLink {...restProps}>{children}</StyledLink>;
  }

  return (
    <StyledLinkButton type="button" {...restProps}>
      {children}
    </StyledLinkButton>
  );
};

export default Link;
