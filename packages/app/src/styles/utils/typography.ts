import { css } from 'styled-components';

import {
  FONT_SMALL,
  FONT_CONTENT,
  FONT_HEADING,
  FONT_TITLE,
  FONT_HUGE,
  FONT_BOLD_SEMI,
  SPACE_SMALL,
  SPACE_HUGE,
  palette,
} from '../base';

import { mainInteractable } from './interactions';

export const title = () => css`
  color: ${palette.fg};
  font-size: ${FONT_HUGE};
  font-family: ${FONT_TITLE};
  margin: 0 0 ${SPACE_HUGE} 0;
`;

export const heading = () => css`
  color: inherit;
  font-size: ${FONT_HUGE};
  font-family: ${FONT_HEADING};
  font-weight: ${FONT_BOLD_SEMI};
  margin: 0;
  padding: 0;
`;

export const text = () => css`
  color: inherit;
  font-size: ${FONT_SMALL};
  font-family: ${FONT_CONTENT};
  margin: 0 0 ${SPACE_SMALL} 0;
`;

export const link = () => css`
  background-color: transparent;
  border: none;
  text-decoration: none;
  ${mainInteractable};
`;
