import styled from 'styled-components';

import { SPACE_SMALL } from '../../../styles/base';

export const RecipeImageContainer = styled.div`
  height: 30vh;
`;

export const RecipeInputContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: ${SPACE_SMALL};
  align-items: baseline;
`;
