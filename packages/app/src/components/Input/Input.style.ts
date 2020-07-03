import styled, { css } from 'styled-components';

import { SPACE_SMALL, palette, FONT_SMALL, FONT_HUGE } from '../../styles/base';
import { secondaryInteractable } from '../../styles/utils';

import { InputProps } from './types';

const inlineStyles = css`
  margin: 0 ${SPACE_SMALL};
  display: inline;
  text-align: center;
`;

export const StyledInput = styled.input<InputProps>`
  border: none;
  border-bottom: 2px solid;

  font-size: ${({ fontSize }) => (fontSize === 'large' ? FONT_HUGE : FONT_SMALL)};
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
