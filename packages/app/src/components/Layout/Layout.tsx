import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { FONT_CONTENT, FONT_MEDIUM, palette, SPACE_MEDIUM } from '../../styles/base';
import { indent, link } from '../../styles/utils';

export const Wrapper = styled.div`
  font-family: ${FONT_CONTENT};
  font-size: ${FONT_MEDIUM};
  color: ${palette.fg};
  background-color: ${palette.bg};

  padding-top: ${SPACE_MEDIUM};
  padding-bottom: ${SPACE_MEDIUM};

  a {
    ${link}
  }
`;

export const Indent = styled.div`
  ${indent}
`;

interface LayoutProps {
  children: React.ReactNode;
}
const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Indent>{children}</Indent>
  </Wrapper>
);

export default Layout;
