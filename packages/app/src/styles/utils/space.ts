import { css, FlattenSimpleInterpolation } from 'styled-components';

import { SPACE_TINY, SPACE_SMALL, SPACE_MEDIUM } from '../base';

// TODO media for laptop, tablet sizes to accomodate recipe area
export const indent = (): FlattenSimpleInterpolation => css`
  margin-left: ${SPACE_MEDIUM};
  margin-right: ${SPACE_MEDIUM};
`;

export const rounded = ({
  topLeft = true,
  topRight = true,
  bottomRight = true,
  bottomLeft = true,
}: {
  topLeft?: boolean;
  topRight?: boolean;
  bottomRight?: boolean;
  bottomLeft?: boolean;
}): FlattenSimpleInterpolation => {
  const getCornerRadius = (corner: boolean): string => (corner ? SPACE_TINY : '0');
  return css`
    border-radius: ${getCornerRadius(topLeft)} ${getCornerRadius(topRight)} ${getCornerRadius(bottomRight)}
      ${getCornerRadius(bottomLeft)};
  `;
};

export const grid = (): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: ${SPACE_SMALL};
  grid-row-gap: ${SPACE_SMALL};
`;
