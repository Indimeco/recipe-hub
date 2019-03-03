import { css } from 'styled-components';
export default props => css`
  font-size: 16px;
  border: 1px solid ${props.theme.colors.main.fg};
  color: ${props.theme.colors.main.fg};
  background-color: ${props.theme.colors.main.bg};
  margin: 10px 2px;
  &:hover {
    background-color: ${props.theme.colors.main.bgAccent};
  }
`;
