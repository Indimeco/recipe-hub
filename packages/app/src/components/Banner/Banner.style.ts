import styled from 'styled-components';

import { palette, SPACE_BANNER, FONT_HERO, SPACE_SMALL } from '../../styles/base';
import { ReactComponent as RawLogo } from '../../assets/RecipeHubOptimized.svg';
import { indent } from '../../styles/utils';

export const BannerWrapper = styled.div`
  background-color: ${palette.bg1};
  border-bottom: 1px solid ${palette.bgAccent};
  min-height: ${SPACE_BANNER};
  display: flex;
  align-items: center;
`;

export const BannerContent = styled.div`
  ${indent}
  color: ${palette.brand};
  display: flex;
  align-items: center;
`;

export const Logo = styled(RawLogo)`
  height: ${FONT_HERO};
  width: ${FONT_HERO};
  margin-right: ${SPACE_SMALL};
`;
