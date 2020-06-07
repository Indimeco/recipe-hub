import styled from 'styled-components';

import { palette, MEDIA_1, SPACE_SMALL, SPACE_LARGE } from '../../styles/base';

export const RecipeIntro = styled.div`
  color: ${palette.fg};
  display: block;

  @media screen and (min-width: ${MEDIA_1}) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: ${SPACE_LARGE};
  }
`;

export const RecipeWrapper = styled.div`
  color: ${palette.fg};
`;

export const TimeBox = styled.div`
  color: ${palette.fg};
  padding: ${SPACE_SMALL};
  margin: ${SPACE_SMALL};
  text-align: center;
`;
