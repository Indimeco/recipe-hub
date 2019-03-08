import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

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
