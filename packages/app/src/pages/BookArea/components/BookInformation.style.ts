import styled from 'styled-components';

import { FONT_MEDIUM, SPACE_TINY, MEDIA_1 } from '../../../styles/base';

export const BookSubText = styled.span`
  font-size: ${FONT_MEDIUM};
  margin-right: ${SPACE_TINY};
`;

export const BookInformationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  position: relative;
  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 10vw 10vw 10vw;
  }
`;

export const SettingsWrapper = styled.div`
  width: 100%;
`;
