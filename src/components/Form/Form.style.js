import { css } from "styled-components";

export default ({ color, ...props }) => {
  return css`
    color: ${color.fg};
    background-color: ${color.bg};
  `;
};
