import React, { useState, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../components/Input/Input';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';

import { TimeBox } from './CookTime.style';

// TODO Test changing to 0 or negative doesn't break
// TODO Test saving input shows number in normal view
// TODO Test svgs for active/waiting don't render if value is 0
// TODO Restyle CookTime

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
  ) => setStateAction(parseInt(e.target.value, 10) || 0);

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
            />
            hours
          </label>
          <label htmlFor="CookTime__activeInputs__minutes">
            <Input
              id="CookTime__activeInputs__minutes"
              value={inputActiveMinutes}
              onChange={updateTimeInput(setInputActiveMinutes)}
              inline
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
            />
            hours
          </label>
          <label htmlFor="CookTime__waitingInputs__minutes">
            <Input
              id="CookTime__waitingInputs__minutes"
              value={inputWaitingMinutes}
              onChange={updateTimeInput(setInputWaitingMinutes)}
              inline
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
  const { minutes: activeMinutes, hours: activeHours } = minutesToTimeUnits(activeTime);
  const { minutes: waitingMinutes, hours: waitingHours } = minutesToTimeUnits(waitingTime);

  // setup stateful values for inputs
  const [inputActiveMinutes, setInputActiveMinutes] = useState(activeMinutes);
  const [inputActiveHours, setInputActiveHours] = useState(activeHours);
  const [inputWaitingMinutes, setInputWaitingMinutes] = useState(waitingMinutes);
  const [inputWaitingHours, setInputWaitingHours] = useState(waitingHours);

  const save = () =>
    handleSave({
      activeTime: timeUnitsToMinutes({ hours: inputActiveHours, minutes: inputActiveMinutes }),
      waitingTime: timeUnitsToMinutes({ hours: inputWaitingHours, minutes: inputWaitingMinutes }),
    });

  return (
    <TimeBox>
      <ToggleEdit onSave={save} edit={isEditMode} onClick={() => toggleEdit(!isEditMode)} />
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
          <FontAwesomeIcon icon={faClock} />
          <span data-testid="CookTime__total">{timeUnitsString(minutesToTimeUnits(activeTime + waitingTime))}</span>
          <span> ( </span>
          <span data-testid="CookTime__active">
            {timeUnitsString({
              hours: inputActiveHours,
              minutes: inputActiveMinutes,
            })}{' '}
            active
          </span>
          {(inputActiveHours || inputActiveMinutes) && (inputWaitingHours || inputWaitingMinutes) && <span> : </span>}
          <span data-testid="CookTime__waiting">
            {timeUnitsString({
              hours: inputWaitingHours,
              minutes: inputWaitingMinutes,
            })}{' '}
            waiting
          </span>
          <span> ) </span>
        </>
      )}
    </TimeBox>
  );
};

export default CookTime;
