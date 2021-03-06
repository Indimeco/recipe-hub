import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import BareModal from 'react-modal';

import { modalStyle, CloseContainer, CloseButton } from './Modal.style';

const isTest = process.env.NODE_ENV === 'test';
if (!isTest) BareModal.setAppElement('#root');

export interface ModalProps {
  isOpen?: boolean;
  setIsOpen: (newState: boolean) => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen = false, setIsOpen, children }) => (
  <BareModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle} ariaHideApp={!isTest}>
    <CloseContainer>
      <CloseButton type="button" onClick={() => setIsOpen(false)}>
        <FontAwesomeIcon icon={faTimes} />
      </CloseButton>
    </CloseContainer>
    {children}
  </BareModal>
);

export default Modal;
