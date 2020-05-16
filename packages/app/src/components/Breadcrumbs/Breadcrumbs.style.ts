import styled from 'styled-components';

import Link from '../Link/Link';
import { SPACE_TINY } from '../../styles/base';
import { indent } from '../../styles/utils';

export const Crumb = styled(Link)`
  margin-right: ${SPACE_TINY};
`;

export const CrumbContainer = styled.ul`
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  ${indent};
  display: flex;

  list-style-type: none;
`;
