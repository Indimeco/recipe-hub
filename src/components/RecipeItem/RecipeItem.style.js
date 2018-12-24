import { css } from 'styled-components';
import shared from '../../styles/shared';

export default props => css`
  .recipe-card {
    background-color: ${props.theme.colors.bgAux};
    box-shadow: 0.2rem 0 0 ${props.theme.colors.accentAux};
    padding: 0.5rem;
    display: grid;

    .heading {
      color: white;
      text-align: center;

      :hover {
        text-decoration: none;
        color: grey;
      }
    }

    .image {
      height: 200px;
    }

    .recipe-item-controls {
      color: ${props.theme.colors.fgAux};
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;

      button {
        border: 1px solid ${props.theme.colors.bg};
        color: ${props.theme.colors.fgAux};
        background-color: ${props.theme.colors.bgAux};
        margin: 2px;
        &:hover {
          background-color: ${props.theme.colors.accent};
        }
      }
    }
  }
`;
