import { css } from 'styled-components';

export default ({ color, ...props }) => {
	return css`
    font-family: ${props.theme.fonts.fontFamily};
    font-size: ${props.theme.fonts.medium};
    color: ${color.fg};
    background-color: ${color.bg};

    .content {
      ${props.theme.spacing.indent}
      padding-top: ${props.theme.spacing.medium};
      padding-bottom: ${props.theme.spacing.medium};
    }

    a {
      text-decoration: none;
    }
  `;
};
