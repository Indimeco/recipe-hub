import React from 'react';
import styled from 'styled-components';
import modalStyle from './Modal.style';
import closeStyle from './CloseButton.style';
import Modal from 'styled-react-modal';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

/* Todo: Fix visual of Modal shifting content when open because of hiding scrollbar */
const StyledModal = Modal.styled`${modalStyle};`;
const CloseButton = styled(Button)`${closeStyle};`;

class ModalButton extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false,
    }

    this.toggleModal = this.toggleModal.bind(this)
  }

  toggleModal (e) {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  render ({buttonContent, modalContent} = this.props) {
    return (
      <React.Fragment>
        <button onClick={this.toggleModal}>{buttonContent}</button>
        <StyledModal
          isOpen={this.state.isOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}>
          <CloseButton onClick={this.toggleModal}>
            <FontAwesomeIcon icon={faWindowClose} />
          </CloseButton>
          {modalContent}
        </StyledModal>
      </React.Fragment>
    )
  }
}


export default ModalButton;
