import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import SrText from '../SrText/SrText';

import { ButtonVisibilityWrapper, ToggleButtonWrapper } from './ToggleEdit.style';

interface ToggleEditProps {
  edit: boolean;
  onClick: React.MouseEventHandler;
  onSave: React.MouseEventHandler;
  children: React.ReactNode;
}

const ToggleEdit: React.FunctionComponent<ToggleEditProps> = ({ edit, onClick, onSave, children }) => (
  <ButtonVisibilityWrapper>
    <ToggleButtonWrapper>
      {edit && (
        <Button onClick={onSave} className={`toggle-button${edit ? '-edit' : ''}`} inlineStyle>
          <SrText>Save</SrText>
          <FontAwesomeIcon icon={faSave} />
        </Button>
      )}
      <Button onClick={onClick} className={`toggle-button${edit ? '-edit' : ''}`} inlineStyle>
        {edit ? 'Cancel' : 'Edit'}
      </Button>
    </ToggleButtonWrapper>
    {children}
  </ButtonVisibilityWrapper>
);

export default ToggleEdit;
