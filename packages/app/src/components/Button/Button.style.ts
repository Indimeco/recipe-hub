import styled, { css } from 'styled-components';

import {
  FONT_MEDIUM,
  FONT_SMALL,
  FONT_TINY,
  MEDIA_1,
  palette,
  SPACE_MEGA,
  SPACE_MEDIUM,
  SPACE_LARGE,
  SPACE_TINY,
} from '../../styles/base';

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
    @media screen and (min-width: ${MEDIA_1}) {
      max-width: ${SPACE_MEGA};
    }
  `,
};

interface ButtonProps {
  inlineStyle?: boolean;
  circle?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export const StyledButton = styled.button<ButtonProps>`
  box-sizing: border-box;
  position: relative;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${palette.auxAccent};
  border-radius: 2%;
  color: ${palette.fg};
  background-color: ${palette.bg};
  padding: ${SPACE_TINY};

  &:hover {
    cursor: pointer;
    color: ${palette.auxAccent};
    background-color: ${palette.bgAccent};
  }

  ${props => (props.inlineStyle ? inlineVariant : regular)};
  ${props => (props.circle ? circular : null)};
  ${({ size }) => (size ? sizes[size] : null)};
`;
