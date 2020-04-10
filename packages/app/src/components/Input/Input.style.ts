import styled, { css } from 'styled-components';

import { SPACE_SMALL, palette, FONT_SMALL } from '../../styles/base';
import { secondaryInteractable } from '../../styles/utils';

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
  border: none;
  border-bottom: 2px solid;

  font-size: ${FONT_SMALL};
  margin: ${SPACE_SMALL} 0;
  width: ${({ width }) => {
    if (width) {
      return width === 'large' ? '10vw' : '5vw';
    }
    return '100%';
  }};
  ${({ inline }) => (inline ? inlineStyles : null)}

  background-color: transparent;
  border-color: ${palette.aux};
  ${secondaryInteractable};
  cursor: text;
  &:focus,
  &:active {
    border-color: ${palette.brand};
    transform: skewX(-10deg);
  }
  &::placeholder {
    color: ${palette.auxAccent};
  }
`;
