import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    background-color: ${subTheme.bg};
    padding: ${props.theme.spacing.large};
  `;
};
