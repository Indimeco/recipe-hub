import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    margin: ${props.theme.spacing.small} 0;
    padding: ${props.theme.spacing.small};
    border: solid 1px ${subTheme.bg};
    &:hover,
    &:focus,
    &:active {
      border: solid 1px ${subTheme.bgAccent};
      box-shadow: 0 0 3px 1px ${subTheme.bgAccent};
    }
  `;
};
