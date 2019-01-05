import { css } from 'styled-components';
import shared from '../../styles/shared';

export default props => css`
  .recipe-card {
    box-sizing: border-box;
    height: 300px;
    background-color: ${props.theme.colors.main.bg};
    box-shadow: 1px 0 0 ${props.theme.colors.main.bgAccent};
    padding: 5px;
    display: grid;
    grid-template-rows: ${(1 / 6) * 100}% ${(2 / 3) * 100}% ${(1 / 6) * 100}%;

    .heading {
      margin: 5px;
      color: white;
      font-size: 16px;

      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      text-decoration: none;

      :hover {
        color: ${props.theme.colors.main.fgAccent};
      }
    }

    .image {
    }

    .recipe-item-controls {
      color: ${props.theme.colors.main.fg};
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      button {
        font-size: 16px;
        border: 1px solid ${props.theme.colors.main.fg};
        color: ${props.theme.colors.main.fg};
        background-color: ${props.theme.colors.main.bg};
        margin: 10px 2px;
        &:hover {
          background-color: ${props.theme.colors.main.bgAccent};
        }
      }
    }
  }
`;
