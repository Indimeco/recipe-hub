import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faCog } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';
import Modal from '../../../components/Modal/Modal';
import SrText from '../../../components/SrText/SrText';

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
        <BookSubText>
          <SrText>{`Views for ${name}: `}</SrText>
          {views}
        </BookSubText>
      </div>
      <div>
        <BookSubText>
          <FontAwesomeIcon icon={faHeart} />
        </BookSubText>
        <BookSubText>
          <SrText>{`Favorites for ${name}: `}</SrText>
          {favorites}
        </BookSubText>
      </div>
      <SettingsWrapper>
        <Button id={`BookInformation__settings--${name}`} onClick={() => setBookSettingsOpen(!isBookSettingsOpen)}>
          <SrText htmlFor={`BookInformation__settings--${name}`}>{`Settings for ${name}`}</SrText>
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
            initialValue={name}
            label={`Change book name for ${name}`}
            button="Confirm"
            onSubmit={(val) => {
              setChangeModalIsOpen(false);
              onSubmit({ bookId: id, newBookName: val });
            }}
          />
        </Modal>
      </SettingsWrapper>
    </BookInformationWrapper>
  );
};
