import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';

import { Button, ButtonProps } from '../Button/Button';

import { modalStyle, CloseContainer, CloseButton } from './Modal.style';

Modal.setAppElement('#root');

interface ModalButtonProps extends ButtonProps {
  ModalContent: React.FunctionComponent<any>;
  isOpen?: boolean;
  setIsOpen: (newState: boolean) => void;
}

export const ModalButton: React.FunctionComponent<ModalButtonProps> = ({
  isOpen = false,
  setIsOpen,
  children,
  ModalContent,
  ...restProps
}) => {
  return (
    <>
      <Button type="button" onClick={() => setIsOpen(true)} {...restProps}>
        {children}
      </Button>
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={modalStyle}>
        <CloseContainer>
          <CloseButton type="button" onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </CloseContainer>
        <ModalContent />
      </Modal>
    </>
  );
};

export default ModalButton;
