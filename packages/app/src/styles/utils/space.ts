import { css, FlattenSimpleInterpolation } from 'styled-components';

import { SPACE_MEDIUM } from '../base';

// TODO media for laptop, tablet sizes to accomodate recipe area
export const indent = (): FlattenSimpleInterpolation => css`
  margin-left: ${SPACE_MEDIUM};
  margin-right: ${SPACE_MEDIUM};
`;
