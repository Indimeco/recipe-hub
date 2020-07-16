import styled from 'styled-components';

import { SPACE_SMALL, FONT_LARGE, MEDIA_1 } from '../../styles/base';
import { text, grid } from '../../styles/utils';

export const BookAreaLayout = styled.div`
  ${grid}

  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ToolsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const BookTile = styled.div`
  padding: ${SPACE_SMALL} 0;

  ${grid}
  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 2fr 1fr;
  }
`;

export const BookText = styled.span`
  font-size: ${FONT_LARGE};
  margin-right: ${SPACE_SMALL};
`;

export const UnstyledLi = styled.li`
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

export const UnstyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;

export const BookButtonText = styled.label`
  ${text};
  margin-bottom: 0;
  margin-right: ${SPACE_SMALL};
`;
