import styled from 'styled-components';

import { palette, SPACE_BANNER, FONT_HERO, SPACE_SMALL } from '../../styles/base';
import { ReactComponent as RawLogo } from '../../assets/RecipeHubOptimized.svg';
import { indent } from '../../styles/utils';

export const BannerWrapper = styled.div`
  background-color: ${palette.bgAccent};
  min-height: ${SPACE_BANNER};
  display: flex;
  justify-content: flex-end;
  position: relative;

  &::after {
    width: 100%;
    height: 100%;
    position: absolute;
    box-shadow: 0 -8px 10px -10px ${palette.bgAccent1} inset;
    content: '';
    pointer-events: none;
  }
`;

export const BannerContent = styled.div`
  ${indent}
  color: ${palette.brand};
  display: flex;
  align-items: center;
  background-color: ${palette.bg1};
  border-radius: 2% 2% 0 0;
  padding: 0 ${SPACE_SMALL};
  margin-top: ${SPACE_SMALL};
`;

export const Logo = styled(RawLogo)`
  height: ${FONT_HERO};
  width: ${FONT_HERO};
  margin-right: ${SPACE_SMALL};
`;
