import { css } from 'styled-components';

export default props => css`
  &.default {
    height: 60px;
    ${props.theme.spacing.indent}
    padding-top: 15px;
    padding-bottom: 15px;
    background-color: red;
  }

  background-color: ${props.theme.colors.main.bg};
  & .heading {
    color: ${props.theme.colors.main.fg};
  }
`;
