import styled from 'styled-components';

import { palette, SPACE_SMALL } from '../../../../styles/base';

export const RecipeCard = styled.div`
  box-sizing: border-box;
  height: 300px;
  background-color: ${palette.aux};
  color: ${palette.fg};
  box-shadow: 1px 0 0 ${palette.auxAccent};
  padding: 5px;
  display: grid;
  grid-template-rows: ${(1 / 6) * 100}% ${(2 / 3) * 100}% ${(1 / 6) * 100}%;
  text-align: center;
`;

export const RecipeHeading = styled.h3`
  margin: ${SPACE_SMALL};
  color: ${palette.bg};

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  text-decoration: none;

  :hover {
    color: ${palette.auxAccent};
  }
`;

export const RecipeItemControls = styled.div`
  color: ${palette.fg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5px;
`;
