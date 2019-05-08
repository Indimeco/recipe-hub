import { css } from 'styled-components';

export default ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  padding: ${props.theme.spacing.small};
  margin: ${props.theme.spacing.small};
  text-align: center;

  svg {
    margin: 0 5px;
  }
`;
