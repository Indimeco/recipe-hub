import { css } from 'styled-components';

export const recipeIntroStyle = ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  display: block;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-column-gap: ${props.theme.spacing.small};
  }
`;

export const recipeDetailStyle = ({ color }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
`;

export const timeBoxStyle = ({ color, ...props }) => css`
  color: ${color.fg};
  background-color: ${color.bg};
  padding: ${props.theme.spacing.small};
  margin: ${props.theme.spacing.small};
  text-align: center;

  svg {
    margin: 0 5px;
  }
`;
