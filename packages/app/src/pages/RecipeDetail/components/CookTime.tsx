import React, { useState, useEffect, ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

import Input from '../../../components/Input/Input';
import { Heading, Text } from '../../../components';
import { Recipe } from '../../../../../../types';
import { RecipeDetailControl } from '../types';

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
          <Heading el="label" level="h3">
            Active time:
          </Heading>
          <Text el="label" htmlFor="CookTime__activeInputs__hours">
            <Input
              id="CookTime__activeInputs__hours"
              value={inputActiveHours}
              onChange={updateTimeInput(setInputActiveHours)}
              inline
              width="small"
            />
            hours
          </Text>
          <Text el="label" htmlFor="CookTime__activeInputs__minutes">
            <Input
              id="CookTime__activeInputs__minutes"
              value={inputActiveMinutes}
              onChange={updateTimeInput(setInputActiveMinutes)}
              inline
              width="small"
            />
            minutes
          </Text>
        </span>
      </div>
      <div>
        <span data-testid="CookTime__waitingInputs">
          <Heading el="label" level="h3">
            Waiting time:
          </Heading>
          <Text el="label" htmlFor="CookTime__waitingInputs__hours">
            <Input
              id="CookTime__waitingInputs__hours"
              value={inputWaitingHours}
              onChange={updateTimeInput(setInputWaitingHours)}
              inline
              width="small"
            />
            hours
          </Text>
          <Text el="label" htmlFor="CookTime__waitingInputs__minutes">
            <Input
              id="CookTime__waitingInputs__minutes"
              value={inputWaitingMinutes}
              onChange={updateTimeInput(setInputWaitingMinutes)}
              inline
              width="small"
            />
            minutes
          </Text>
        </span>
      </div>
    </>
  );
};

interface CookTimeProps extends RecipeFragment, RecipeDetailControl {}

export const CookTime: React.FunctionComponent<CookTimeProps> = ({
  activeTime = 0,
  waitingTime = 0,
  isEditMode,
  dispatch,
}) => {
  // convert stored minutes to time units
  const { minutes: activeMinutes, hours: activeHours } = minutesToTimeUnits(activeTime || 0);
  const { minutes: waitingMinutes, hours: waitingHours } = minutesToTimeUnits(waitingTime || 0);

  // setup stateful values for inputs
  const [inputActiveMinutes, setInputActiveMinutes] = useState(activeMinutes);
  const [inputActiveHours, setInputActiveHours] = useState(activeHours);
  const [inputWaitingMinutes, setInputWaitingMinutes] = useState(waitingMinutes);
  const [inputWaitingHours, setInputWaitingHours] = useState(waitingHours);

  useEffect(() => {
    if (isEditMode === false) {
      setInputActiveHours(activeHours);
      setInputActiveMinutes(activeMinutes);
      setInputWaitingHours(waitingHours);
      setInputWaitingMinutes(waitingMinutes);
    }
  }, [isEditMode, activeHours, activeMinutes, waitingHours, waitingMinutes]);

  useEffect(() => {
    if (isEditMode === true) {
      dispatch({
        type: 'update',
        value: {
          activeTime: timeUnitsToMinutes({ hours: inputActiveHours, minutes: inputActiveMinutes }),
          waitingTime: timeUnitsToMinutes({ hours: inputWaitingHours, minutes: inputWaitingMinutes }),
        },
      });
    }
  }, [
    inputActiveHours,
    inputWaitingHours,
    inputWaitingMinutes,
    inputActiveMinutes,
    dispatch,
    isEditMode,
    activeHours,
    activeMinutes,
    waitingHours,
    waitingMinutes,
  ]);

  const activeTimeString = timeUnitsString({
    hours: activeHours,
    minutes: activeMinutes,
  });

  const waitingTimeString = timeUnitsString({
    hours: waitingHours,
    minutes: waitingMinutes,
  });

  const hasActiveTime = activeHours || activeMinutes;
  const hasWaitingTime = waitingHours || waitingMinutes;

  return (
    <TimeBox>
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
        <span>
          <ClockWrapper>
            <FontAwesomeIcon icon={faClock} />
          </ClockWrapper>
          <Heading el="span" level="h3" data-testid="CookTime__total">
            {hasActiveTime || hasWaitingTime
              ? timeUnitsString({
                  minutes: activeMinutes + waitingMinutes,
                  hours: activeHours + waitingHours,
                })
              : 'Done in a pinch!'}
          </Heading>
          <span>
            {hasActiveTime || hasWaitingTime ? <Text>{' ( '}</Text> : null}
            <Text data-testid="CookTime__active">{activeTimeString ? `${activeTimeString} active` : ''}</Text>
            {hasActiveTime && hasWaitingTime ? <Text> : </Text> : null}
            <Text data-testid="CookTime__waiting">{waitingTimeString ? `${waitingTimeString} waiting` : ''}</Text>
            {hasActiveTime || hasWaitingTime ? <Text>{' ) '}</Text> : null}
          </span>
        </span>
      )}
    </TimeBox>
  );
};

export default CookTime;
