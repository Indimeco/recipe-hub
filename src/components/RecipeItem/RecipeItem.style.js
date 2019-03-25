import { css } from 'styled-components';

export default ({ subTheme, ...props }) => {
  subTheme = props.theme.colors[subTheme] || props.theme.colors.root;
  return css`
    .recipe-card {
      box-sizing: border-box;
      height: 300px;
      background-color: ${subTheme.bg};
      color: ${subTheme.fg};
      box-shadow: 1px 0 0 ${subTheme.bgAccent};
      padding: 5px;
      display: grid;
      grid-template-rows: ${(1 / 6) * 100}% ${(2 / 3) * 100}% ${(1 / 6) * 100}%;
      text-align: center;

      a {
        height: 100%;
        color: inherit;
        text-decoration: none;
        &:hover {
          color: ${subTheme.fgAccent};
          text-decoration: underline;
        }
      }

      .heading {
        margin: ${props.theme.spacing.small};
        color: ${subTheme.fg};

        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        overflow: hidden;
        text-decoration: none;

        :hover {
          color: ${subTheme.fgAccent};
        }
      }

      .recipe-item-controls {
        color: ${props.theme.colors.main.fg};
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  `;
};
