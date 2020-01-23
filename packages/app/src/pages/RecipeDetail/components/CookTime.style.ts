import styled from 'styled-components';

import { palette, SPACE_SMALL } from '../../../styles/base';

export const TimeBox = styled.div`
  color: ${palette.fg};
  background-color: ${palette.bg};
  text-align: center;
`;

export const ClockWrapper = styled.span`
  margin: 0 ${SPACE_SMALL};
`;
