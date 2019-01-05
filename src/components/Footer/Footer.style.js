import { css } from 'styled-components';
export default props => css`
  ${props.theme.spacing.indent}
  padding-top: 10px;
  padding-bottom: 10px;

  color: ${props.theme.colors.main.fg};
  background-color: ${props.theme.colors.main.bg};
  p {
    margin: 0;
  }
`;
