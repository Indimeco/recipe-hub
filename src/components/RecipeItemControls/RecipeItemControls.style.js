import { css } from 'styled-components';
export default props => css`
  color: ${props.theme.colors.fgAux};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  button {
    margin: 2px;
  }
`;
