import { css } from "styled-components";

export default ({ color, ...props }) => {
  return css`
    ${props.theme.spacing.indent}
    padding-top: ${props.theme.spacing.small};
    padding-bottom: ${props.theme.spacing.small};

    color: ${color.fg};
    background-color: ${color.bg};

    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    p {
      margin: 0;
    }
  `;
};
