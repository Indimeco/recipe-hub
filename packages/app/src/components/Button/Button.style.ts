import styled, { css } from 'styled-components';

import { palette, FONT_SMALL, SPACE_TINY } from '../../styles/base';

const inlineVariant = css`
  width: 25px;
  height: 25px;
  line-height: 0.8;

  padding: 0;
  margin: 5px;
`;

const regular = css`
  margin: 10px 0;
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

  &:hover {
    cursor: pointer;
    color: ${palette.auxAccent};
    background-color: ${palette.bgAccent};
  }
`;
