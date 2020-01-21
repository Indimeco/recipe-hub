import styled from 'styled-components';

import { palette, MEDIA_1, SPACE_SMALL } from '../../styles/base';

export const RecipeIntro = styled.div`
  color: ${palette.fg};
  background-color: ${palette.bg};
  display: block;

  @media screen and (min-width: ${MEDIA_1}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: ${SPACE_SMALL};
  }
`;

export const RecipeWrapper = styled.div`
  color: ${palette.fg};
  background-color: ${palette.bg};
`;

export const TimeBox = styled.div`
  color: ${palette.fg};
  background-color: ${palette.bg};
  padding: ${SPACE_SMALL};
  margin: ${SPACE_SMALL};
  text-align: center;
`;
