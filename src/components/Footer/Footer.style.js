import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
  ${props.theme.spacing.indent}
  padding-top: ${props.theme.spacing.small};
  padding-bottom: ${props.theme.spacing.small};

  color: ${subTheme.fg};
  background-color: ${subTheme.bg};
  p {
    margin: 0;
  }
`;
};
