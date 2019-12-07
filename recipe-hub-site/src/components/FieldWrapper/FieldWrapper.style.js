import { css } from 'styled-components';

export const wrapperStyle = ({inline, theme}) => css`
	border: none;
	padding: 0;
	margin: 0;
	margin-right: ${inline ? theme.spacing.small : 0}

	display: ${inline ? 'inline' : 'block'};
`;

export const labelStyle = ({color, inline}) => css`
	border: none;
	padding: 0;
	margin: 0;
	font-weight: 400;

	display: ${inline ? 'inline' : 'block'};
	color: ${color.fg};
`;

