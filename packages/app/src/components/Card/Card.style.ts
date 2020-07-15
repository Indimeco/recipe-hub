import styled from 'styled-components';

import { palette, SPACE_SMALL } from '../../styles/base';

export const Container = styled.div`
  background-color: ${palette.bgAccent};
  padding: ${SPACE_SMALL};
  border: 1px solid ${palette.fg};
  border-radius: 4px;
  height: max-content;
`;
