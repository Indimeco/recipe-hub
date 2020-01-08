import styled from 'styled-components';

import { SPACE_SMALL, palette } from '../../styles/base';

interface StyledInputProps {
  inline: boolean;
  width?: 'small' | 'large';
}
export const StyledInput = styled.input<StyledInputProps>`
  background-color: ${palette.bg};
  margin: 0 0 ${SPACE_SMALL} 0;
  border: none;
  border-bottom: 2px solid ${palette.brand};
  margin: 0 10px;
  display: ${({ inline }) => (inline ? 'inline' : 'block')};
  width: ${({ width }) => {
    if (width) {
      return width === 'large' ? '10vw' : '5vw';
    }
    return '100%';
  }};

  /* TODO add better focus */
  &:focus,
  &:active {
    border: none;
    border-bottom: 2px solid ${palette.fg};
    outline: none;
  }
`;
