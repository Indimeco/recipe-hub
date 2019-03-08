import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    color: ${subTheme.fg};
    border: none;
    display: block;
    margin: ${props.theme.spacing.medium} 0;

    label {
      display: block;
      margin: ${props.theme.spacing.small} 0px;
    }

    label + * {
      display: block;
    }
  `;
};
