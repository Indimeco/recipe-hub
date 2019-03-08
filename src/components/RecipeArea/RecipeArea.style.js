import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;

  return css`
    .recipe-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;

      @media screen and (min-width: 768px) {
        grid-template-columns: 1fr 1fr 1fr;
      }

      @media screen and (min-width: 992px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      }
    }
  `;
};
