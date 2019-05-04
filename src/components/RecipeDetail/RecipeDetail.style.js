import { css } from 'styled-components';

export const recipeIntroStyle = ({ color }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  display: block;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: 10px;
  }
`;

export const recipeDetailStyle = ({ color }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
`;
