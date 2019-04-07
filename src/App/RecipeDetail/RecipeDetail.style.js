import { css } from "styled-components";

export default ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
`;
