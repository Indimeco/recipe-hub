import styled from 'styled-components';

import { SPACE_TINY, palette } from '../../styles/base';
import { link } from '../../styles/utils';

export const DropdownWrapper = styled.div`
  box-shadow: 0 0 4px 0 ${palette.aux};
  background-color: ${palette.bg};
  position: absolute;
`;

export const DropdownItem = styled.div`
  padding: ${SPACE_TINY};
  &:hover {
    background-color: ${palette.aux};
    color: ${palette.bg};
  }
`;

export const DropdownA = styled.a`
  ${link}
`;
