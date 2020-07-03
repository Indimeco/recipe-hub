import styled from 'styled-components';

import { palette, SPACE_SMALL, FONT_SMALL } from '../../styles/base';
import { secondaryInteractable } from '../../styles/utils';

export const StyledTextarea = styled.textarea`
  margin: 0 0 ${SPACE_SMALL} 0;
  padding: ${SPACE_SMALL};
  width: 100%;
  height: 30vh;
  background-color: transparent;

  font-size: ${FONT_SMALL};

  border-width: 2px;
  border-color: ${palette.aux};
  ${secondaryInteractable};
  cursor: text;

  &:focus,
  &:active {
    border-color: ${palette.brand};
  }

  &::placeholder {
    color: ${palette.auxAccent};
  }
`;
