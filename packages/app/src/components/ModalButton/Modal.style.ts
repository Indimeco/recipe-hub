import styled from 'styled-components';

import { SPACE_SMALL, palette } from '../../styles/base';

export const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CloseButton = styled.button`
  margin: 0;
  padding: ${SPACE_SMALL};
  cursor: pointer;
  background: transparent;
  border: none;
  color: ${palette.brand};
  &:hover {
    color: ${palette.aux};
  }
`;

export const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default modalStyle;
