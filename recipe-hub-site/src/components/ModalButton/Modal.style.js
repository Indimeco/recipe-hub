import { css } from 'styled-components';

export default ({ color, ...props }) => {
	return css`
    background-color: ${color.bg};
    padding: ${props.theme.spacing.large};
  `;
};
