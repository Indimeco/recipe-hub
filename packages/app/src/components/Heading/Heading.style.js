import { css } from 'styled-components';

import { SPACE_SMALL } from '../../styles/base';

export default () => {
  return css`
    margin: ${SPACE_SMALL} 0;
    padding: 0;
    color: inherit;

    h1 {
      font-size: 28px;
    }

    h2 {
      font-size: 26px;
    }

    h3 {
      font-size: 24px;
    }

    h4 {
      font-size: 22px;
    }

    h5 {
      font-size: 20px;
    }

    h6 {
      font-size: 18px;
    }
  `;
};
