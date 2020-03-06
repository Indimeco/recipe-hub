import styled from 'styled-components';

import { SPACE_TINY, palette } from '../../styles/base';
import { link } from '../../styles/utils';

export const RelativeContext = styled.div`
  position: relative;
`;

export const DropdownWrapper = styled.div`
  box-shadow: 0 0 4px 0 ${palette.aux};
  background-color: ${palette.bg};
  position: absolute;
  right: 0;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  &:hover,
  &:focus {
    background-color: ${palette.aux};
    color: ${palette.brand};
  }

  & > * {
    padding: ${SPACE_TINY};
  }
`;

export const DropdownA = styled.a`
  ${link}
`;
