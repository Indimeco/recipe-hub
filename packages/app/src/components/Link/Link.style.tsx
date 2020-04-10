import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

import { link } from '../../styles/utils';
import { palette } from '../../styles/base';

interface LinkProps {
  invertStyle?: boolean;
}

const invertColors = ({ invertStyle }: { invertStyle?: boolean }) =>
  invertStyle &&
  css`
    color: ${palette.auxAccent};
    &:hover {
      color: ${palette.brand};
    }
  `;

export const StyledAnchor = styled.a<LinkProps>`
  ${link}
  ${invertColors}
`;

// https://github.com/styled-components/styled-components/issues/135
export const StyledLink = styled(({ invertStyle, ...restProps }) => <Link {...restProps} />)`
  ${link}
  ${invertColors}
`;

export const StyledLinkButton = styled.button<LinkProps>`
  padding: 0;
  margin: 0;
  font-size: inherit;
  ${link}
  ${invertColors}
`;
