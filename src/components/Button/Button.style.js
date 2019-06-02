import { css } from 'styled-components';

export default ({ inline, color }) => {
	return css`
	box-sizing: border-box;
	${inline ? inlineVariant : regular};
    border: 1px solid ${color.fgAccent};
    color: ${color.fg};
    background-color: ${color.bg};

	padding: 5px;

    &:hover {
		cursor: pointer;
		color: ${color.fgAccent};
		background-color: ${color.bgAccent};
    }
  `;
};

const inlineVariant = () => css`
	width: auto;
	margin: 5px;
`;

const regular = () => css`
	width: 100%;
	margin: 10px 0;
`;

