import React, { useState, useRef, useEffect } from 'react';

import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

import { InputLabel, ContentWrapper, ButtonPosition } from './ModalContent.style';

interface InputModalProps {
  onSubmit: (bookName: string) => any;
  label: string;
  button: string;
  initialValue?: string;
}

export const InputModal: React.FunctionComponent<InputModalProps> = ({ label, button, initialValue, onSubmit }) => {
  const [inputValue, setInputValue] = useState(initialValue || '');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <ContentWrapper>
      <form>
        <InputLabel>{label}</InputLabel>
        <Input value={inputValue} onChange={e => setInputValue(e.target.value)} forwardedRef={inputRef} />
        <ButtonPosition>
          <Button
            type="submit"
            circle={false}
            size="large"
            onClick={e => {
              e.preventDefault();
              onSubmit(inputValue);
            }}
          >
            {button}
          </Button>
        </ButtonPosition>
      </form>
    </ContentWrapper>
  );
};
