import styled from 'styled-components';

import { palette, SPACE_NAV, SPACE_TINY } from '../../styles/base';
import { indent } from '../../styles/utils';

export const NavWrapper = styled.nav`
  background-color: ${palette.bgAccent};
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

export const NavLink = styled.li`
  margin-right: ${SPACE_TINY};
`;
