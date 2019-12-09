import { css } from 'styled-components';

export default ({ color }) => {
  return css`
    color: ${color.fg};
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;
    text-align: center;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
  `;
};
