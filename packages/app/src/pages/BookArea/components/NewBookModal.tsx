import React, { useState } from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { InputLabel, ContentWrapper } from './NewBookModal.style';

interface ModalContentProps {
  onSubmit: (bookName: string) => any;
}

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({ onSubmit }) => {
  const [newBookName, setNewBookName] = useState('');

  return (
    <ContentWrapper>
      <InputLabel>New book name</InputLabel>
      <Input value={newBookName} onChange={e => setNewBookName(e.target.value)} />
      <Button type="button" inlineStyle onClick={() => onSubmit(newBookName)}>
        Create
      </Button>
    </ContentWrapper>
  );
};
