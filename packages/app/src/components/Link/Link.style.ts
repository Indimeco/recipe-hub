import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { link } from '../../styles/utils';

export const StyledAnchor = styled.a`
  ${link}
`;

export const StyledLink = styled(Link)`
  ${link}
`;

export const StyledLinkButton = styled.button`
  ${link}
`;
