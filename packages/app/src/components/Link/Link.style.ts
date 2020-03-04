import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { link } from '../../styles/utils';
import { palette } from '../../styles/base';

const auxStyle = ({ aux }: { aux?: boolean }) =>
  aux &&
  css`
    color: ${palette.aux};
    &:hover {
      color: ${palette.auxAccent};
    }
  `;

export const StyledAnchor = styled.a`
  ${link}
  ${auxStyle}
`;

export const StyledLink = styled(Link)`
  ${link}
  ${auxStyle}
`;

export const StyledLinkButton = styled.button`
  padding: 0;
  margin: 0;
  font-size: inherit;
  ${link}
  ${auxStyle}
`;
