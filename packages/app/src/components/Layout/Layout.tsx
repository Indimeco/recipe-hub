import styled from 'styled-components';

import { FONT_CONTENT, FONT_MEDIUM, palette, SPACE_MEDIUM } from '../../styles/base';
import { indent, link } from '../../styles/utils';

export const Layout = styled.div`
    font-family: ${FONT_CONTENT};
    font-size: ${FONT_MEDIUM};
    color: ${palette.fg};
    background-color: ${palette.bg};

    ${indent}
    padding-top: ${SPACE_MEDIUM};
    padding-bottom: ${SPACE_MEDIUM};

    a {
      ${link}
    }
`;

export default Layout;
