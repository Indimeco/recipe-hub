import styled from 'styled-components';

import { SPACE_SMALL, SPACE_TINY, FONT_LARGE, FONT_MEDIUM, MEDIA_1 } from '../../styles/base';

export const BookTile = styled.div`
  padding: ${SPACE_SMALL} 0;
`;

export const BookText = styled.span`
  font-size: ${FONT_LARGE};
  margin-right: ${SPACE_SMALL};
`;

export const BookSubText = styled.span`
  font-size: ${FONT_MEDIUM};
  margin-right: ${SPACE_TINY};
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

export const BookInformation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 10vw 10vw 10vw;
  }
`;
