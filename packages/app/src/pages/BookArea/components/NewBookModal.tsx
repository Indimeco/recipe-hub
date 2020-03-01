import React, { useState, useRef, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { InputLabel, ContentWrapper } from './ModalContent.style';

interface NewBookModalProps {
  onSubmit: (bookName: string) => any;
}

export const NewBookModal: React.FunctionComponent<NewBookModalProps> = ({ onSubmit }) => {
  const [newBookName, setNewBookName] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <ContentWrapper>
      <form>
        <InputLabel>New book name</InputLabel>
        <Input value={newBookName} onChange={e => setNewBookName(e.target.value)} forwardedRef={inputRef} />
        <Button
          type="submit"
          inlineStyle
          onClick={e => {
            e.preventDefault();
            onSubmit(newBookName);
          }}
        >
          Create
        </Button>
      </form>
    </ContentWrapper>
  );
};
