import styled from 'styled-components';

import { MEDIA_1, MEDIA_2 } from '../../styles/base';

export const RecipesLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;

  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${MEDIA_2}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;
