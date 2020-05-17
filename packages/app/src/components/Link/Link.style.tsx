import styled, { css } from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

import { link } from '../../styles/utils';
import { palette } from '../../styles/base';

import { LinkProps } from './types';

const invertColors = ({ invertStyle }: { invertStyle?: boolean }) =>
  invertStyle &&
  css`
    color: ${palette.auxAccent};
    &:hover {
      color: ${palette.brand};
    }
  `;

const inactiveStyle = ({ inactive }: { inactive?: boolean }) =>
  inactive &&
  css`
    color: ${palette.fg};
    &:hover {
      color: ${palette.fg};
    }
    pointer-events: none;
  `;

export const StyledAnchor = styled.a<LinkProps>`
  ${link}
  ${invertColors}
  ${inactiveStyle}
`;

// https://github.com/styled-components/styled-components/issues/135
export const StyledLink = styled(({ invertStyle, inactive, ...restProps }) => <Link {...restProps} />)`
  ${link}
  ${invertColors}
  ${inactiveStyle}
`;

export const StyledLinkButton = styled.button<LinkProps>`
  padding: 0;
  margin: 0;
  font-size: inherit;
  ${link}
  ${invertColors}
  ${inactiveStyle}
`;
