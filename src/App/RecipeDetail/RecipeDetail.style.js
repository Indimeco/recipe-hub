import { css } from 'styled-components';

export default ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 10px;
`;
