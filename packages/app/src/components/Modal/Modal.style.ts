import styled from 'styled-components';

import { SPACE_SMALL, palette } from '../../styles/base';
import { secondaryInteractable } from '../../styles/utils';

export const CloseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const CloseButton = styled.button`
  margin: 0;
  padding: ${SPACE_SMALL};
  background: transparent;
  border: none;

  ${secondaryInteractable};
`;

export const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: palette.bg,
    color: palette.fg,
    border: 'none',
    boxShadow: `0 0 4px ${palette.bgAccent}`,
  },
};

export default modalStyle;
