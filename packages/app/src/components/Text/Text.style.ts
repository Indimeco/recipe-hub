import styled from 'styled-components';

import { text } from '../../styles/utils';

export const StyledText = styled.span<{ space?: boolean }>`
  ${text};
  ${({ space }) => (space ? '' : 'margin: 0;')}
`;
