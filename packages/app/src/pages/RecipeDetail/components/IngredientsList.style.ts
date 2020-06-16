import styled from 'styled-components';

import { SPACE_SMALL } from '../../../styles/base';

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
`;
