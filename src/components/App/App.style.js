import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
  font-family: ${props.theme.fonts.fontFamily};
  font-size: ${props.theme.fonts.medium};
  color: ${subTheme.fg};
  background-color: ${subTheme.bg};

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
