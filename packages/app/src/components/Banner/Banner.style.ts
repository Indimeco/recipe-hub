import styled from 'styled-components';

import { palette, SPACE_MEDIUM } from '../../styles/base';
import { indent } from '../../styles/utils';

export const BannerWrapper = styled.div`
  background-color: ${palette.brand};
`;

export const BannerContent = styled.div`
  ${indent}
  padding-top: ${SPACE_MEDIUM};
  padding-bottom: ${SPACE_MEDIUM};
  color: ${palette.bg};
`;
