import styled from 'styled-components';

import { FONT_MEDIUM, SPACE_TINY, MEDIA_1 } from '../../../styles/base';
import { grid } from '../../../styles/utils';

export const BookSubText = styled.span`
  font-size: ${FONT_MEDIUM};
  margin-right: ${SPACE_TINY};
`;

export const BookInformationWrapper = styled.div`
  ${grid}

  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const SettingsWrapper = styled.div`
  width: 100%;

  @media screen and (min-width: ${MEDIA_1}) {
    display: flex;
    justify-content: flex-end;
  }
`;
