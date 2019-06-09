import { css } from 'styled-components';

export default ({ inline, color }) => css`
	box-sizing: border-box;
	${inline ? inlineVariant : regular};
	border: 1px solid ${color.fgAccent};
	color: ${color.fg};
	background-color: ${color.bg};

	&:hover {
		cursor: pointer;
		color: ${color.fgAccent};
		background-color: ${color.bgAccent};
	}
`;

const inlineVariant = ({theme}) => css`
	width: 25px;
	height: 25px;
	font-size: ${theme.fonts.small};
	line-height: 0.8;

	padding: 0;
	margin: 5px;
`;

const regular = () => css`
	width: 100%;

	padding: 5px;
	margin: 10px 0;
`;

