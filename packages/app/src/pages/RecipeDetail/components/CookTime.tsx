import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faRunning, faHourglass, faEquals, faPlus } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../components/Input/Input';
import FieldWrapper from '../../../components/FieldWrapper/FieldWrapper';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';

import { TimeBox } from './CookTime.style';

// TODO Test changing input changes the number
// TODO Test saving input shows number in normal view
// TODO Test minutesToTimeUnits/timeUnitsToMinutes functionality given some numerical test cases

interface TimeUnits {
  hours: number;
  minutes: number;
}

interface RecipeFragment {
  activeTime: number | undefined;
  waitingTime: number | undefined;
}

const minutesToTimeUnits = (minutes: number): TimeUnits => ({
  hours: Math.floor(minutes / 60),
  minutes: Math.round(minutes % 60),
});

const timeUnitsToMinutes = (timeUnits: TimeUnits) => timeUnits.minutes + timeUnits.hours * 60;

const timeUnitsString = ({ hours, minutes }: TimeUnits) =>
  `${hours ? `${hours}hr` : ''}${hours && minutes ? ' ' : ''}${minutes ? `${minutes}m` : ''}`;

interface CookTimeProps extends RecipeFragment {
  handleSave: (payload: RecipeFragment) => void;
}
const CookTime = ({ activeTime = 0, waitingTime = 0, handleSave }: CookTimeProps) => {
  const [isEditMode, toggleEdit] = useState(false);

  // convert stored minutes to time units
  const { minutes: activeMinutes, hours: activeHours } = minutesToTimeUnits(activeTime);
  const { minutes: waitingMinutes, hours: waitingHours } = minutesToTimeUnits(waitingTime);

  // setup stateful values for inputs
  const [inputActiveMinutes, setInputActiveMinutes] = useState(activeMinutes);
  const [inputActiveHours, setInputActiveHours] = useState(activeHours);
  const [inputWaitingMinutes, setInputWaitingMinutes] = useState(waitingMinutes);
  const [inputWaitingHours, setInputWaitingHours] = useState(waitingHours);
  const updateTimeInput = (setStateAction: React.Dispatch<React.SetStateAction<number>>) => (
    e: ChangeEvent<HTMLInputElement>,
  ) => setStateAction(parseInt(e.target.value, 10) || 0);

  const save = () =>
    handleSave({
      activeTime: timeUnitsToMinutes({ hours: inputActiveHours, minutes: inputActiveMinutes }),
      waitingTime: timeUnitsToMinutes({ hours: inputWaitingHours, minutes: inputWaitingMinutes }),
    });

  return (
    <TimeBox>
      <ToggleEdit onSave={save} edit={isEditMode} onClick={() => toggleEdit(!isEditMode)} />
      <FontAwesomeIcon icon={faClock} />
      {timeUnitsString(minutesToTimeUnits(activeTime + waitingTime))}
      <FontAwesomeIcon icon={faEquals} />
      <FontAwesomeIcon icon={faRunning} />
      {isEditMode ? (
        <>
          <FieldWrapper label="hours" inline>
            <Input name="activeHrs" value={inputActiveHours} onChange={updateTimeInput(setInputActiveHours)} inline />
          </FieldWrapper>
          <FieldWrapper label="minutes" inline>
            <Input
              name="activeMins"
              value={inputActiveMinutes}
              onChange={updateTimeInput(setInputActiveMinutes)}
              inline
            />
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
            <Input
              name="waitingHrs"
              value={inputWaitingHours}
              onChange={updateTimeInput(setInputWaitingHours)}
              inline
            />
          </FieldWrapper>
          <FieldWrapper label="minutes" inline>
            <Input
              name="waitingMins"
              value={inputWaitingMinutes}
              onChange={updateTimeInput(setInputWaitingMinutes)}
              inline
            />
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
