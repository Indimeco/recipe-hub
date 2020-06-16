import styled, { css } from 'styled-components';

import {
  FONT_MEDIUM,
  FONT_SMALL,
  FONT_TINY,
  FONT_BOLD,
  palette,
  SPACE_MEGA,
  SPACE_MEDIUM,
  SPACE_LARGE,
  SPACE_TINY,
} from '../../styles/base';
import { secondaryInteractable } from '../../styles/utils';

const inlineVariant = css`
  width: auto;
  display: inline-block;
  margin: 0;
`;

const regular = css`
  margin: 10px 0;
`;

const circular = css`
  border-radius: 100%;
  padding: 0;
`;

const rectangular = css`
  padding: ${SPACE_TINY};
  border-radius: 3%;
  max-width: ${SPACE_MEGA};
`;

const sizes = {
  small: css`
    font-size: ${FONT_TINY};
    width: ${SPACE_MEDIUM};
    height: ${SPACE_MEDIUM};
  `,
  medium: css`
    font-size: ${FONT_SMALL};
    width: ${SPACE_LARGE};
    height: ${SPACE_LARGE};
  `,
  large: css`
    font-size: ${FONT_MEDIUM};
    width: 100%;
    height: auto;
  `,
};

interface ButtonProps {
  inlineStyle?: boolean;
  circle?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 1px solid;
  margin: 0;

  font-weight: ${FONT_BOLD};

  border-color: ${palette.aux};
  background-color: ${palette.bg1};
  ${secondaryInteractable};

  &:hover,
  &:focus {
    border-color: ${palette.bgAccent};
    background-color: ${palette.bg};
  }

  ${(props) => (props.inlineStyle ? inlineVariant : regular)};
  ${(props) => (props.circle ? circular : rectangular)};
  ${({ size }) => (size ? sizes[size] : null)};
`;
