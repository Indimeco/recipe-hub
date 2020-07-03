import styled from 'styled-components';

import { SPACE_SMALL, SPACE_MEDIUM } from '../../../styles/base';

export const EditContainer = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr auto;
    grid-column-gap: ${SPACE_SMALL};
  }
`;

export const IngredientsUl = styled.ul`
  list-style-position: inside;
  padding: 0;
  margin: 0;
`;

export const IngredientsContainer = styled.div`
  padding: 0;
  margin: 0;
  margin-bottom: ${SPACE_MEDIUM};
  border: none;
`;
