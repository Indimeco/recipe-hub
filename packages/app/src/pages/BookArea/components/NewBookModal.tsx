import React, { useState } from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { InputLabel, ContentWrapper } from './NewBookModal.style';

export const ModalContent = () => {
  const [newBookName, setNewBookName] = useState('');
  return (
    <ContentWrapper>
      <InputLabel>New book name</InputLabel>
      <Input value={newBookName} onChange={e => setNewBookName(e.target.value)} />
      <Button type="submit" inlineStyle onClick={() => console.log(newBookName)}>
        Create
      </Button>
    </ContentWrapper>
  );
};
