import styled, { css } from 'styled-components';

import { SPACE_SMALL, palette } from '../../styles/base';

interface StyledInputProps {
  inline?: boolean;
  width?: 'small' | 'large';
}

const inlineStyles = css`
  margin: 0 ${SPACE_SMALL};
  display: inline;
  text-align: center;
`;

export const StyledInput = styled.input<StyledInputProps>`
  background-color: ${palette.bg};
  border: none;
  border-bottom: 2px solid ${palette.brand};
  margin: ${SPACE_SMALL} 0;
  width: ${({ width }) => {
    if (width) {
      return width === 'large' ? '10vw' : '5vw';
    }
    return '100%';
  }};

  ${({ inline }) => (inline ? inlineStyles : null)}

  transition: transform 0.05s ease-in;

  &:focus,
  &:active {
    border: none;
    border-bottom: 2px solid ${palette.fg};
    outline: none;
    transform: skewX(-10deg);
  }
`;
