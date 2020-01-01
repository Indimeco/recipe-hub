import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRunning, faHourglass, faEquals, faPlus } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../components/Input/Input';
import FieldWrapper from '../../../components/FieldWrapper/FieldWrapper';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';

import { TimeBox } from './CookTime.style';

interface TimeUnits {
  hours: number;
  minutes: number;
}

const minutesToTimeUnits = (minutes: number): TimeUnits => ({
  hours: Math.floor(minutes / 60),
  minutes: Math.round(minutes % 60),
});

const timeUnitsString = ({ hours, minutes }: TimeUnits) =>
  `${hours ? `${hours}hr` : ''}${hours && minutes ? ' ' : ''}${minutes ? `${minutes}m` : ''}`;

interface CookTimeProps {
  active: number | undefined;
  waiting: number | undefined;
}
const CookTime = ({ active = 0, waiting = 0 }: CookTimeProps) => {
  const [isEditMode, toggleEdit] = useState(false);

  // convert stored minutes to time units
  const { minutes: activeMinutes, hours: activeHours } = minutesToTimeUnits(active);
  const { minutes: waitingMinutes, hours: waitingHours } = minutesToTimeUnits(waiting);

  // setup stateful values for inputs
  const [inputActiveMinutes, setInputActiveMinutes] = useState(activeMinutes);
  const [inputActiveHours, setInputActiveHours] = useState(activeHours);
  const [inputWaitingMinutes, setInputWaitingMinutes] = useState(waitingMinutes);
  const [inputWaitingHours, setInputWaitingHours] = useState(waitingHours);

  // TODO apply mutation
  const submit = () => console.log('submit');

  return (
    <TimeBox>
      <ToggleEdit onSave={submit} edit={isEditMode} onClick={() => toggleEdit(!isEditMode)} />
      <FontAwesomeIcon icon={faClock} />
      {timeUnitsString(minutesToTimeUnits(active + waiting))}
      <FontAwesomeIcon icon={faEquals} />
      <FontAwesomeIcon icon={faRunning} />
      {isEditMode ? (
        <>
          <FieldWrapper label="hours" inline>
            <Input name="activeHrs" value={inputActiveHours} onChange={setInputActiveHours} inline />
          </FieldWrapper>
          <FieldWrapper label="minutes" inline>
            <Input name="activeMins" value={inputActiveMinutes} onChange={setInputActiveMinutes} inline />
          </FieldWrapper>
        </>
      ) : (
        <span>
          {timeUnitsString({
            hours: inputActiveHours,
            minutes: inputActiveMinutes,
          })}
        </span>
      )}
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faHourglass} />
      {isEditMode ? (
        <>
          <FieldWrapper label="hours" inline>
            <Input name="waitingHrs" value={inputWaitingHours} onChange={setInputWaitingHours} inline />
          </FieldWrapper>
          <FieldWrapper label="minutes" inline>
            <Input name="waitingMins" value={inputWaitingMinutes} onChange={setInputWaitingMinutes} inline />
          </FieldWrapper>
        </>
      ) : (
        <span>
          {timeUnitsString({
            hours: inputWaitingHours,
            minutes: inputWaitingMinutes,
          })}
        </span>
      )}
    </TimeBox>
  );
};

export default CookTime;
