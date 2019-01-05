import { css } from 'styled-components';
export default props => css`
  color: ${props.theme.colors.main.fg};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    margin: 2px;
  }
`;
