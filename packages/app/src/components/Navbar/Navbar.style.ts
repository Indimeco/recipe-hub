import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, SPACE_SMALL, FONT_SMALL } from '../../styles/base';
import { indent } from '../../styles/utils';

export const NavWrapper = styled.nav`
  background-color: ${palette.aux};
`;

export const NavLinkList = styled.ul`
  padding: ${SPACE_SMALL} 0;
  margin-top: 0;
  margin-bottom: 0;
  ${indent};

  list-style-type: none;
  display: flex;
`;

export const NavLink = styled(Link)`
  color: ${palette.bg};
  font-size: ${FONT_SMALL};
  margin-right: ${SPACE_SMALL};
  text-decoration: none;

  &:hover {
    color: ${palette.aux};
    text-decoration: underline;
  }
`;
