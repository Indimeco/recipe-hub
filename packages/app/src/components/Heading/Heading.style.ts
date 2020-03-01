import styled from 'styled-components';

import { heading } from '../../styles/utils';
import { FONT_HERO, FONT_HUGE, FONT_MEDIUM, FONT_SMALL, FONT_TINY } from '../../styles/base';

export const StyledHeading = styled.h1`
  ${heading}

  h1 {
    font-size: ${FONT_HERO};
  }

  h2 {
    font-size: ${FONT_HUGE};
  }

  h3 {
    font-size: ${FONT_MEDIUM};
  }

  h4 {
    font-size: ${FONT_SMALL};
  }

  h5 {
    font-size: ${FONT_TINY};
  }

  h6 {
    font-size: ${FONT_TINY};
  }
`;
