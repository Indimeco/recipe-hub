import styled from 'styled-components';

import { SPACE_SMALL, FONT_MEDIUM } from '../../../styles/base';

export const ContentWrapper = styled.div`
  margin: 0 ${SPACE_SMALL};
`;

export const InputLabel = styled.label`
  font-size: ${FONT_MEDIUM};
`;

export const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
`;
