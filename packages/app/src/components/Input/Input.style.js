import { css } from 'styled-components';

import { SPACE_SMALL, palette } from '../../styles/base';

const textareaStyles = () => css`
  height: 400px;
`;

export default ({ inline, ...props }) => {
  return css`
    margin: 0 0 ${SPACE_SMALL} 0;
    padding: ${SPACE_SMALL};
    border: solid 1px ${palette.fg};
    width: ${inline ? '100px' : '100%'};

    &:hover,
    &:focus,
    &:active {
      border: solid 1px ${palette.auxAccent};
      box-shadow: 0 0 3px 1px ${palette.bgAccent};
    }

    ${props.el === 'textarea' ? textareaStyles : ''}
  `;
};
