import { css } from 'styled-components';
export default props => css`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-size: 16px;
  color: ${props.theme.colors.base.fg};
  background-color: ${props.theme.colors.base.bg};

  .content {
    ${props.theme.spacing.indent}
    padding-top: 15px;
    padding-bottom: 15px;
  }

  a {
    text-decoration: none;
  }
`;
