import { css } from 'styled-components';

export default ({theme}) => {
	return css`
    margin: ${theme.spacing.small} 0;
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
