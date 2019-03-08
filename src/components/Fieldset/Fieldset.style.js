import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    color: ${subTheme.fg};
    border: none;

    legend {
      width: 100%;
      box-shadow: 0 3px 3px -3px ${subTheme.fg};
    }
  `;
};
