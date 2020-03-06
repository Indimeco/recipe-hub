import React, { useState, useRef, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { InputLabel, ContentWrapper } from './ModalContent.style';

interface InputModalProps {
  onSubmit: (bookName: string) => any;
  label: string;
  button: string;
}

export const InputModal: React.FunctionComponent<InputModalProps> = ({ label, button, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <ContentWrapper>
      <form>
        <InputLabel>{label}</InputLabel>
        <Input value={inputValue} onChange={e => setInputValue(e.target.value)} forwardedRef={inputRef} />
        <Button
          type="submit"
          inlineStyle
          onClick={e => {
            e.preventDefault();
            onSubmit(inputValue);
          }}
        >
          {button}
        </Button>
      </form>
    </ContentWrapper>
  );
};
