import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../components/Input/Input';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import { Recipe } from '../../../../../../types';

import { TimeBox, ClockWrapper } from './CookTime.style';

interface TimeUnits {
  hours: number;
  minutes: number;
}

interface RecipeFragment {
  activeTime: Recipe['activeTime'];
  waitingTime: Recipe['waitingTime'];
}

const minutesToTimeUnits = (minutes: number): TimeUnits => ({
  hours: Math.floor(minutes / 60),
  minutes: Math.round(minutes % 60),
});

const timeUnitsToMinutes = (timeUnits: TimeUnits) => timeUnits.minutes + timeUnits.hours * 60;

const timeUnitsString = ({ hours, minutes }: TimeUnits) =>
  `${hours ? `${hours}hr` : ''}${hours && minutes ? ' ' : ''}${minutes ? `${minutes}m` : ''}`;

interface InputValues {
  inputActiveHours: number;
  inputActiveMinutes: number;
  inputWaitingHours: number;
  inputWaitingMinutes: number;
}
interface InputStateDispatches {
  setInputActiveHours: React.Dispatch<React.SetStateAction<number>>;
  setInputActiveMinutes: React.Dispatch<React.SetStateAction<number>>;
  setInputWaitingHours: React.Dispatch<React.SetStateAction<number>>;
  setInputWaitingMinutes: React.Dispatch<React.SetStateAction<number>>;
}
const EditCookTime = ({
  inputActiveHours,
  inputActiveMinutes,
  setInputActiveHours,
  setInputActiveMinutes,
  inputWaitingHours,
  inputWaitingMinutes,
  setInputWaitingHours,
  setInputWaitingMinutes,
}: InputValues & InputStateDispatches) => {
  const updateTimeInput = (setStateAction: React.Dispatch<React.SetStateAction<number>>) => (
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const value = parseInt(e.target.value, 10) || 0; // cast NaN to 0
    setStateAction(value >= 0 ? value : 0); // cast negative numbers to 0
  };

  return (
    <>
      <div>
        <span data-testid="CookTime__activeInputs">
          Active time:
          <label htmlFor="CookTime__activeInputs__hours">
            <Input
              id="CookTime__activeInputs__hours"
              value={inputActiveHours}
              onChange={updateTimeInput(setInputActiveHours)}
              inline
              width="small"
            />
            hours
          </label>
          <label htmlFor="CookTime__activeInputs__minutes">
            <Input
              id="CookTime__activeInputs__minutes"
              value={inputActiveMinutes}
              onChange={updateTimeInput(setInputActiveMinutes)}
              inline
              width="small"
            />
            minutes
          </label>
        </span>
      </div>
      <div>
        <span data-testid="CookTime__waitingInputs">
          Waiting time:
          <label htmlFor="CookTime__waitingInputs__hours">
            <Input
              id="CookTime__waitingInputs__hours"
              value={inputWaitingHours}
              onChange={updateTimeInput(setInputWaitingHours)}
              inline
              width="small"
            />
            hours
          </label>
          <label htmlFor="CookTime__waitingInputs__minutes">
            <Input
              id="CookTime__waitingInputs__minutes"
              value={inputWaitingMinutes}
              onChange={updateTimeInput(setInputWaitingMinutes)}
              inline
              width="small"
            />
            minutes
          </label>
        </span>
      </div>
    </>
  );
};

interface CookTimeProps extends RecipeFragment {
  handleSave: (payload: RecipeFragment) => void;
}
const CookTime = ({ activeTime = 0, waitingTime = 0, handleSave }: CookTimeProps) => {
  const [isEditMode, toggleEdit] = useState(false);

  // convert stored minutes to time units
  const { minutes: activeMinutes, hours: activeHours } = minutesToTimeUnits(activeTime || 0);
  const { minutes: waitingMinutes, hours: waitingHours } = minutesToTimeUnits(waitingTime || 0);

  // setup stateful values for inputs
  const [inputActiveMinutes, setInputActiveMinutes] = useState(activeMinutes);
  const [inputActiveHours, setInputActiveHours] = useState(activeHours);
  const [inputWaitingMinutes, setInputWaitingMinutes] = useState(waitingMinutes);
  const [inputWaitingHours, setInputWaitingHours] = useState(waitingHours);

  const handleEditMode = (setEditMode: boolean) => {
    if (setEditMode === false) {
      setInputActiveMinutes(activeMinutes);
      setInputActiveHours(activeHours);
      setInputWaitingMinutes(waitingMinutes);
      setInputWaitingHours(waitingHours);
    }
    toggleEdit(setEditMode);
  };

  const save = () => {
    handleSave({
      activeTime: timeUnitsToMinutes({ hours: inputActiveHours, minutes: inputActiveMinutes }),
      waitingTime: timeUnitsToMinutes({ hours: inputWaitingHours, minutes: inputWaitingMinutes }),
    });
    toggleEdit(false);
  };

  const activeTimeString = timeUnitsString({
    hours: inputActiveHours,
    minutes: inputActiveMinutes,
  });

  const waitingTimeString = timeUnitsString({
    hours: inputWaitingHours,
    minutes: inputWaitingMinutes,
  });

  const hasActiveTime = inputActiveHours || inputActiveMinutes;
  const hasWaitingTime = inputWaitingHours || inputWaitingMinutes;

  return (
    <TimeBox>
      <ToggleEdit onSave={save} edit={isEditMode} onClick={() => handleEditMode(!isEditMode)}>
        {isEditMode ? (
          <EditCookTime
            {...{
              inputActiveHours,
              inputActiveMinutes,
              inputWaitingHours,
              inputWaitingMinutes,
              setInputActiveHours,
              setInputActiveMinutes,
              setInputWaitingHours,
              setInputWaitingMinutes,
            }}
          />
        ) : (
          <>
            <ClockWrapper>
              <FontAwesomeIcon icon={faClock} />
            </ClockWrapper>
            <span data-testid="CookTime__total">
              {hasActiveTime || hasWaitingTime
                ? timeUnitsString({
                    minutes: inputActiveMinutes + inputWaitingMinutes,
                    hours: inputActiveHours + inputWaitingHours,
                  })
                : 'Done in a pinch!'}
            </span>
            {hasActiveTime || hasWaitingTime ? <span>{' ( '}</span> : null}
            <span data-testid="CookTime__active">{activeTimeString ? `${activeTimeString} active` : ''}</span>
            {hasActiveTime && hasWaitingTime ? <span> : </span> : null}
            <span data-testid="CookTime__waiting">{waitingTimeString ? `${waitingTimeString} waiting` : ''}</span>
            {hasActiveTime || hasWaitingTime ? <span>{' ) '}</span> : null}
          </>
        )}
      </ToggleEdit>
    </TimeBox>
  );
};

export default CookTime;
