import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { palette, SPACE_TINY, SPACE_SMALL, FONT_MEDIUM } from '../../../../styles/base';
import { heading } from '../../../../styles/utils';

export const RecipeCard = styled.div`
  box-sizing: border-box;
  border-radius: 2%;
  min-height: 30vh;
  background-color: ${palette.aux};
  color: ${palette.fg};
  box-shadow: 1px 0 0 ${palette.auxAccent};
  padding: 5px;
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
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
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RecipeItemControlSpacer = styled.div`
  margin-right: ${SPACE_SMALL};
`;
