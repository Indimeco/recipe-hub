import { css } from 'styled-components';

export default props => css`
  &.default {
    height: 60px;
    padding: 15px 25px 5px 25px;
    background-color: red;
  }

  color: ${props.theme.colors.fgAux};
  background-color: ${props.theme.colors.bgAux};
`;
