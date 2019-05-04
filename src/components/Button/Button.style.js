import { css } from 'styled-components';

export default ({ color }) => {
	return css`
    border: 1px solid ${color.fgAccent};
    color: ${color.fg};
    background-color: ${color.bg};
    width: 100%;
    margin: 10px 0;

    &:hover {
      color: ${color.fgAccent};
      background-color: ${color.bgAccent};
    }
  `;
};
