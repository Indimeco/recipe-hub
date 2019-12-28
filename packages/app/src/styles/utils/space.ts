import { css, FlattenSimpleInterpolation } from 'styled-components';

import { SPACE_MEDIUM, SPACE_MEGA, MEDIA_1 } from '../base';

// TODO media for laptop, tablet sizes to accomodate recipe area
export const indent = (): FlattenSimpleInterpolation => css`
  margin-left: ${SPACE_MEDIUM};
  margin-right: ${SPACE_MEDIUM};

  @media only screen and (min-width: ${MEDIA_1}) {
    margin-left: ${SPACE_MEGA};
    margin-right: ${SPACE_MEGA};
  }
`;
