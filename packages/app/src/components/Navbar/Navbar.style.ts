import styled from 'styled-components';

import { palette, SPACE_NAV } from '../../styles/base';

export const NavWrapper = styled.nav`
  background-color: ${palette.bg};
  position: relative;
  min-height: ${SPACE_NAV};
  display: flex;
  align-items: center;
`;
