import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { FONT_CONTENT, FONT_MEDIUM, palette, SPACE_MEDIUM, SPACE_BODY } from '../../styles/base';
import { indent, link } from '../../styles/utils';

export const Wrapper = styled.div`
  min-height: ${SPACE_BODY};
  font-family: ${FONT_CONTENT};
  font-size: ${FONT_MEDIUM};
  color: ${palette.fg};
  background-color: ${palette.bg};
  display: flex;

  padding-top: ${SPACE_MEDIUM};
  padding-bottom: ${SPACE_MEDIUM};

  a {
    ${link}
  }
`;

export const Indent = styled.div`
  ${indent}
  width: 100%;
`;

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: FunctionComponent<LayoutProps> = ({ children }) => (
  <Wrapper>
    <Indent>{children}</Indent>
  </Wrapper>
);

export default Layout;
