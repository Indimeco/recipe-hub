import { css } from "styled-components";

export default ({ color, ...props }) => {
  return css`
    border: 1px solid ${color.fgAccent};
    color: ${color.fg};
    background-color: ${color.bg};
    margin: ${props.theme.spacing.small} 2px;
    &:hover {
      color: ${color.fgAccent};
      background-color: ${color.bgAccent};
    }
  `;
};
