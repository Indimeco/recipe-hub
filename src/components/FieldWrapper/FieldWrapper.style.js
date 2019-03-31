import { css } from 'styled-components';

export default ({ color, ...props }) => {
  return css`
    color: ${color.fg};
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
