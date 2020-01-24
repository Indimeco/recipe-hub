import styled, { css } from 'styled-components';

import { palette, FONT_SMALL, SPACE_TINY, MEDIA_1 } from '../../styles/base';

const inlineVariant = css`
  width: auto;
`;

const regular = css`
  width: 100%;
  margin: 10px 0;
  @media screen and (min-width: ${MEDIA_1}) {
    width: 200px;
  }
`;

interface StyledProps {
  inlineStyle?: boolean;
}
export const StyledButton = styled.button<StyledProps>`
  box-sizing: border-box;
  font-size: ${FONT_SMALL};
  ${props => (props.inlineStyle ? inlineVariant : regular)};
  border: 1px solid ${palette.auxAccent};
  color: ${palette.fg};
  background-color: ${palette.bg};
  padding: ${SPACE_TINY};
  margin: 10px 0;

  &:hover {
    cursor: pointer;
    color: ${palette.auxAccent};
    background-color: ${palette.bgAccent};
  }
`;
