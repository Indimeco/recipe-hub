import { css } from 'styled-components';

export default props => css`
  margin: 10px 0;
  padding: 5px;
  border: solid 1px ${props.theme.colors.main.bg};
  &:hover,
  &:focus,
  &:active {
    border: solid 1px ${props.theme.colors.main.bgAccent};
    box-shadow: 0 0 3px 1px ${props.theme.colors.main.bgAccent};
  }
`;
