import styled from 'styled-components';

import { palette, SPACE_BANNER } from '../../styles/base';
import { indent } from '../../styles/utils';

export const BannerWrapper = styled.div`
  background-color: ${palette.bg1};
  box-shadow: 0 0 6px ${palette.bgAccent};
  min-height: ${SPACE_BANNER};
  display: flex;
  align-items: center;
`;

export const BannerContent = styled.div`
  ${indent}
  color: ${palette.brand};
`;
