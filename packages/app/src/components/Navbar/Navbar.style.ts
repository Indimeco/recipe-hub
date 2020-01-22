import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, SPACE_SMALL, FONT_SMALL, SPACE_NAV } from '../../styles/base';
import { indent } from '../../styles/utils';

export const NavWrapper = styled.nav`
  background-color: ${palette.aux};
  min-height: ${SPACE_NAV};
  display: flex;
  align-items: center;
`;

export const NavLinkList = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  ${indent};
  display: flex;

  list-style-type: none;
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
