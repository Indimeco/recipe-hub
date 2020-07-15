import styled from 'styled-components';

import { SPACE_SMALL, FONT_LARGE, FONT_MEDIUM } from '../../styles/base';

export const BookAreaLayout = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-column-gap: ${SPACE_SMALL};
`;

export const BookTile = styled.div`
  padding: ${SPACE_SMALL} 0;
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

export const BookButtonText = styled.span`
  color: inherit;
  font-size: ${FONT_MEDIUM};
`;
