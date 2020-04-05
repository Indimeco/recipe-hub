import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { link } from '../../styles/utils';
import { palette } from '../../styles/base';

const invertColors = ({ invert }: { invert?: boolean }) =>
  invert &&
  css`
    color: ${palette.auxAccent};
    &:hover {
      color: ${palette.brand};
    }
  `;

export const StyledAnchor = styled.a`
  ${link}
  ${invertColors}
`;

export const StyledLink = styled(Link)`
  ${link}
  ${invertColors}
`;

export const StyledLinkButton = styled.button`
  padding: 0;
  margin: 0;
  font-size: inherit;
  ${link}
  ${invertColors}
`;
