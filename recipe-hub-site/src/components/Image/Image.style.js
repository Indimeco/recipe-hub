import { css } from 'styled-components';

export default () => {
	return css`
    background-color: black;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
};
