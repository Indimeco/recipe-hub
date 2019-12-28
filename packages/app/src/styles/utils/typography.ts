import { css } from 'styled-components';

import {
  FONT_MEDIUM,
  FONT_CONTENT,
  FONT_HEADING,
  FONT_TITLE,
  FONT_HUGE,
  SPACE_SMALL,
  SPACE_HUGE,
  palette,
} from '../base';

export const title = () => css`
  color: ${palette.fg};
  font-size: ${FONT_HUGE};
  font-family: ${FONT_TITLE};
  margin: 0 0 ${SPACE_HUGE} 0;
`;

export const heading = () => css`
  color: ${palette.fg};
  font-size: ${FONT_HUGE};
  font-family: ${FONT_HEADING};
  margin: 0 0 ${SPACE_HUGE} 0;
`;

export const text = () => css`
  color: ${palette.fg};
  font-size: ${FONT_MEDIUM};
  font-family: ${FONT_CONTENT};
  margin: 0 0 ${SPACE_SMALL} 0;
`;

export const link = () => css`
  cursor: pointer;
  background-color: transparent;
  color: ${palette.brand};
  border: none;
  text-decoration: none;
  transition: color 0.1s ease-in, transform 0.1s ease-in;

  &:hover,
  &:focus {
    color: ${palette.aux};
    text-decoration: none;
  }
`;
