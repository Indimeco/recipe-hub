import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faHeart, faCog } from '@fortawesome/free-solid-svg-icons';

import Button from '../../../components/Button/Button';
import Dropdown from '../../../components/Dropdown/Dropdown';

import { BookSubText, SettingsWrapper, BookInformationWrapper } from './BookInformation.style';

interface BookInformationProps {
  views: number;
  favorites: number;
}

export const BookInformation: React.FC<BookInformationProps> = ({ views, favorites }) => {
  const [isBookSettingsOpen, setBookSettingsOpen] = useState(false);

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
            { text: 'Change name', to: '/' },
            { text: 'Test', to: '/' },
            { text: 'Potato', href: '#' },
          ]}
        />
      </SettingsWrapper>{' '}
    </BookInformationWrapper>
  );
};
