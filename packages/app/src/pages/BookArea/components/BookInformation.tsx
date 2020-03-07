import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faCog } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Modal from '../../../components/Modal/Modal';

import { InputModal } from './InputModal';
import { BookSubText, SettingsWrapper, BookInformationWrapper } from './BookInformation.style';

interface BookInformationProps {
  views: number;
  favorites: number;
  id: string;
  name: string;
  onSubmit: any;
}

export const BookInformation: React.FC<BookInformationProps> = ({ id, name, views, favorites, onSubmit }) => {
  const [isBookSettingsOpen, setBookSettingsOpen] = useState(false);
  const [changeModalIsOpen, setChangeModalIsOpen] = useState(false);

  return (
    <BookInformationWrapper>
      <div>
        <BookSubText>
          <FontAwesomeIcon icon={faEye} />
        </BookSubText>
        <BookSubText>{views}</BookSubText>
      </div>
      <div>
        <BookSubText>
          <FontAwesomeIcon icon={faHeart} />
        </BookSubText>
        <BookSubText>{favorites}</BookSubText>
      </div>
      <SettingsWrapper>
        <Button onClick={() => setBookSettingsOpen(!isBookSettingsOpen)}>
          <FontAwesomeIcon icon={faCog} />
        </Button>
        <Dropdown
          isOpen={isBookSettingsOpen}
          onRequestClose={() => setBookSettingsOpen(false)}
          content={[
            {
              text: 'Change name',
              onClick: () => {
                setBookSettingsOpen(false);
                setChangeModalIsOpen(true);
              },
            },
          ]}
        />

        <Modal isOpen={changeModalIsOpen} setIsOpen={setChangeModalIsOpen}>
          <InputModal
            label={`Change book name for ${name}`}
            button="Confirm"
            onSubmit={val => {
              setChangeModalIsOpen(false);
              onSubmit({ bookId: id, newBookName: val });
            }}
          />
        </Modal>
      </SettingsWrapper>
    </BookInformationWrapper>
  );
};
