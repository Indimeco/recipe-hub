import { css } from 'styled-components';

export default props => css`
  color: ${props.theme.colors.base.fg};
  border: none;

  legend {
    width: 100%;
    box-shadow: 0 3px 3px -3px ${props.theme.colors.base.fg};
  }
`;
