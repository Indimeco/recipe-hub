import { css } from 'styled-components';

export default props => css`
  color: ${props.theme.colors.base.fg};
  border: none;
  display: block;
  margin: 20px 0;

  label {
    display: block;
    margin: 10px 0px;
  }

  label + * {
    display: block;
  }
`;
