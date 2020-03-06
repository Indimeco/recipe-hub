import React from 'react';

import { Button, ButtonProps } from '../Button/Button';
import { Modal, ModalProps } from '../Modal/Modal';

type ModalButtonProps = ButtonProps &
  ModalProps & {
    ModalContent: React.FunctionComponent<any>;
    isOpen?: boolean;
    setIsOpen: (newState: boolean) => void;
  };

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
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalContent />
      </Modal>
    </>
  );
};

export default ModalButton;
