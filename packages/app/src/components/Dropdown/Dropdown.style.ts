import styled from 'styled-components';

import { SPACE_TINY, palette } from '../../styles/base';

export const RelativeContext = styled.div`
  position: relative;
`;

export const DropdownWrapper = styled.div`
  box-shadow: 0 0 4px 0 ${palette.bgAccent};
  background-color: ${palette.bg};
  position: absolute;
  left: 0;
  z-index: 1;
`;

export const DropdownItem = styled.div`
  &:hover,
  &:focus {
    background-color: ${palette.aux};
  }

  & > * {
    padding: ${SPACE_TINY};
  }
`;
