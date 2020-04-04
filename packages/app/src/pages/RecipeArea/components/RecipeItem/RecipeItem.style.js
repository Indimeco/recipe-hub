import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, SPACE_TINY, FONT_MEDIUM } from '../../../../styles/base';
import { heading } from '../../../../styles/utils';

export const RecipeCard = styled.div`
  box-sizing: border-box;
  border-radius: 2%;
  height: 30vh;
  background-color: ${palette.aux};
  color: ${palette.fg};
  box-shadow: 1px 0 0 ${palette.auxAccent};
  padding: 5px;
  display: grid;
  grid-template-rows: ${(1 / 6) * 100}% ${(2 / 3) * 100}% ${(1 / 6) * 100}%;
  text-align: center;
`;

export const CenteringLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  padding: ${SPACE_TINY};
`;

export const RecipeHeading = styled.h3`
  ${heading};
  font-size: ${FONT_MEDIUM};
  margin: 0;
  color: ${palette.bg};

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
