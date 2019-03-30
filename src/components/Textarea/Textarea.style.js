import { css } from 'styled-components';

export default ({ color, ...props }) => {
  return css`
    margin: ${props.theme.spacing.small} 0;
    padding: ${props.theme.spacing.small};
    border: solid 1px ${color.bg};
    &:hover,
    &:focus,
    &:active {
      border: solid 1px ${color.bgAccent};
      box-shadow: 0 0 3px 1px ${color.bgAccent};
    }
  `;
};
