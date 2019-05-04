import { css } from 'styled-components';

export default ({ color }) => {
	return css`
    color: ${color.fg};
    border: none;

    legend {
      width: 100%;
      box-shadow: 0 3px 3px -3px ${color.fg};
    }
  `;
};
