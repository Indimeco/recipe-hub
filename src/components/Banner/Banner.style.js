import { css } from "styled-components";

export default ({ color, ...props }) => {
  return css`
    &.default {
      height: 60px;
      ${props.theme.spacing.indent}
      padding-top: ${props.theme.spacing.medium};
      padding-bottom: ${props.theme.spacing.medium};
    }

    background-color: ${color.bg};
    color: ${color.fg};
  `;
};
