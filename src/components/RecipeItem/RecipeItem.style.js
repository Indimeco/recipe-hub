import { css } from 'styled-components';
import shared from '../../styles/shared';

export default props => css`
  &,
  & * {
    ${shared};
    display: block;
  }

  background-color: ${props.theme.colors.primary};
`;
