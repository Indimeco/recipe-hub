import styled, { css } from 'styled-components';

import { heading } from '../../styles/utils';
import { FONT_HERO, FONT_HUGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from '../../styles/base';

export type HeadingTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headingStyles = {
  h1: css`
    font-size: ${FONT_HERO};
  `,
  h2: css`
    font-size: ${FONT_HUGE};
  `,
  h3: css`
    font-size: ${FONT_MEDIUM};
  `,
  h4: css`
    font-size: ${FONT_SMALL};
  `,
  h5: css`
    font-size: ${FONT_TINY};
  `,
  h6: css`
    font-size: ${FONT_TINY};
  `,
};

export const StyledHeading = styled.h1<{ el: HeadingTypes }>`
  ${heading};
  ${({ el }) => headingStyles[el]};
`;
