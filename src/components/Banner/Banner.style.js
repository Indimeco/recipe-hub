import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
  &.default {
    height: 60px;
    ${props.theme.spacing.indent}
    padding-top: ${props.theme.spacing.medium};
    padding-bottom: ${props.theme.spacing.medium};
  }

  background-color: ${subTheme.bg};
  color: ${subTheme.fg};
`;
};
