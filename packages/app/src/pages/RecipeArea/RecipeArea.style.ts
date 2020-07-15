import styled from 'styled-components';

import { MEDIA_1, MEDIA_2, SPACE_SMALL } from '../../styles/base';
import { heading, text, grid } from '../../styles/utils';

export const HeadingLayout = styled.div`
  ${grid};

  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const RecipesLayout = styled.div`
  ${grid};

  @media screen and (min-width: ${MEDIA_1}) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: ${MEDIA_2}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const RecipeHeading = styled.h2`
  ${heading}
`;

export const ToolsLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ToolsText = styled.label`
  ${text};
  margin-bottom: 0;
  margin-right: ${SPACE_SMALL};
`;
