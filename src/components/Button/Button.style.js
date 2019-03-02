import { css } from 'styled-components';
export default props => css`
  margin: 10px 10px;
  padding: 20px;
  color: ${props.theme.colors.main.fg};
  background-color: ${props.theme.colors.main.bg};
`;
