import { css } from 'styled-components';
export default props => css`
  background-color: black;
  min-width: 100%;
  min-height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
