import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen, faSave } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button/Button';
import SrText from '../SrText/SrText';

import { ToggleButtonWrapper } from './ToggleEdit.style';

interface ToggleEditProps {
  edit: boolean;
  onClick: React.MouseEventHandler;
  onSave: React.MouseEventHandler;
}

const ToggleEdit: React.FunctionComponent<ToggleEditProps> = ({ edit, onClick, onSave }) => (
  <ToggleButtonWrapper>
    {edit && (
      <Button onClick={onSave}>
        <SrText>Save</SrText>
        <FontAwesomeIcon icon={faSave} />
      </Button>
    )}
    <Button onClick={onClick}>
      <SrText>{edit ? 'Cancel' : 'Edit'}</SrText>
      <FontAwesomeIcon icon={edit ? faTimes : faPen} />
    </Button>
  </ToggleButtonWrapper>
);

export default ToggleEdit;
