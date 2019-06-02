import { css } from 'styled-components';

export default ({ color, ...props }) => css`
	text-align: right;

	/* button {
		margin: ${props.theme.spacing.tiny};
		padding: ${props.theme.spacing.tiny};
		background: none;
		border: none;
		outline: 1px solid ${color.fg};
		color: ${color.fg};

		&:hover,
		&:active {
			color: ${color.fgAccent};
			outline: 1px solid ${color.fgAccent};
		}
	} */
`;
