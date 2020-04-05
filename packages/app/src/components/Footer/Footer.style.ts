import styled from 'styled-components';

import { indent } from '../../styles/utils';
import { SPACE_SMALL, SPACE_FOOTER, palette } from '../../styles/base';

export const FooterContent = styled.div`
    ${indent}
    color: ${palette.bg};

    ul {
      list-style-type: none;
      text-align: right;
      padding: 0;
      margin: 0;
    }

    ul > li {
      display: inline-block;
      padding: ${SPACE_SMALL};
    }
`;

export const FooterWrapper = styled.div`
  min-height: ${SPACE_FOOTER};
  background-color: ${palette.bgAccent};
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
