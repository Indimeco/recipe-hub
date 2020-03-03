import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { LinkProps as RouterLinkProps } from 'react-router-dom';

import { StyledAnchor, StyledLinkButton, StyledLink } from './Link.style';

export const Link = ({
  children,
  type,
  ...restProps
}: AnchorHTMLAttributes<any> | ButtonHTMLAttributes<any> | RouterLinkProps<any>) => {
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
