import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    border: 1px solid ${subTheme.fgAccent};
    color: ${subTheme.fg};
    background-color: ${subTheme.bg};
    margin: ${props.theme.spacing.small} 2px;
    &:hover {
      color: ${subTheme.fgAccent};
      background-color: ${subTheme.bgAccent};
    }
  `;
};
