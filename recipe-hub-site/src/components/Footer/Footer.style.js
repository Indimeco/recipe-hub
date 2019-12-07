import { css } from 'styled-components';

export const footerStyle = ({ color, ...props }) => {
	return css`
    ${props.theme.spacing.indent}
    padding-top: ${props.theme.spacing.small};
    padding-bottom: ${props.theme.spacing.small};

    color: ${color.fg};
    background-color: ${color.bg};

    ul {
      list-style-type: none;
      text-align: right;
      padding: 0;
      margin: 0;
    }

    ul > li {
      display: inline-block;
      padding: ${props.theme.spacing.small};
    }

    a {
      &, &:visited {
        color: ${color.fg};
      }
      &:hover {
          color: ${color.fgAccent};
      }
    }

  `;
};

export const spacingStyle = ({ ...props }) =>
	css`
    padding: ${props.theme.spacing.large} 0;
  `;
