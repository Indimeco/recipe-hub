import React from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';

import closeStyle from './CloseButton.style';
import modalStyle from './Modal.style';

/* Todo: Fix visual of Modal shifting content when open because of hiding scrollbar */
const StyledModal = Modal.styled`${modalStyle};`;
const CloseButton = styled(Button)`
  ${closeStyle};
`;

class ModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render({ buttonContent, modalContent, color } = this.props) {
    return (
      <>
        <Button color={color} onClick={this.toggleModal}>
          {buttonContent}
        </Button>
        <StyledModal isOpen={this.state.isOpen} onBackgroundClick={this.toggleModal} onEscapeKeydown={this.toggleModal}>
          <CloseButton onClick={this.toggleModal}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseButton>
          {modalContent}
        </StyledModal>
      </>
    );
  }
}

export default ModalButton;
