import React from 'react';
import { render, within, fireEvent } from '@testing-library/react';

import CookTime from './CookTime';

const timeValues = {
  expectedActive: '20m active',
  expectedTotal: '2hr 30m',
  expectedWaiting: '2hr 10m waiting',
  suppliedActive: 20,
  suppliedWaiting: 130,
};

describe('CookTime', () => {
  it('renders separated time values', async () => {
    const { getByTestId } = render(
      <CookTime
        activeTime={timeValues.suppliedActive}
        waitingTime={timeValues.suppliedWaiting}
        isEditMode={false}
        dispatch={() => {
          return null;
        }}
      />,
    );

    expect(getByTestId('CookTime__active').textContent).toStrictEqual(timeValues.expectedActive);
    expect(getByTestId('CookTime__waiting').textContent).toStrictEqual(timeValues.expectedWaiting);
    expect(getByTestId('CookTime__total').textContent).toStrictEqual(timeValues.expectedTotal);
  });

  it('does not render svg or text for 0 time values', async () => {
    const zeroTimeValues = {
      expectedActive: '',
      expectedTotal: '2hr 10m',
      expectedWaiting: '2hr 10m waiting',
      suppliedActive: 0,
      suppliedWaiting: 130,
    };

    const { getByTestId } = render(
      <CookTime
        activeTime={zeroTimeValues.suppliedActive}
        waitingTime={zeroTimeValues.suppliedWaiting}
        isEditMode={false}
        dispatch={() => {
          return null;
        }}
      />,
    );

    expect(getByTestId('CookTime__active').textContent).toStrictEqual(zeroTimeValues.expectedActive);
    expect(getByTestId('CookTime__waiting').textContent).toStrictEqual(zeroTimeValues.expectedWaiting);
    expect(getByTestId('CookTime__total').textContent).toStrictEqual(zeroTimeValues.expectedTotal);
  });

  it('renders a message if all times are zero', async () => {
    const zeroTimeValues = {
      expectedActive: '',
      expectedTotal: 'Done in a pinch!',
      expectedWaiting: '',
      suppliedActive: 0,
      suppliedWaiting: 0,
    };

    const { getByTestId } = render(
      <CookTime
        activeTime={zeroTimeValues.suppliedActive}
        waitingTime={zeroTimeValues.suppliedWaiting}
        isEditMode={false}
        dispatch={() => {
          return null;
        }}
      />,
    );

    expect(getByTestId('CookTime__active').textContent).toStrictEqual(zeroTimeValues.expectedActive);
    expect(getByTestId('CookTime__waiting').textContent).toStrictEqual(zeroTimeValues.expectedWaiting);
    expect(getByTestId('CookTime__total').textContent).toStrictEqual(zeroTimeValues.expectedTotal);
  });

  it('changes time when edited', async () => {
    const { getByTestId } = render(
      <CookTime
        activeTime={timeValues.suppliedActive}
        waitingTime={timeValues.suppliedWaiting}
        isEditMode
        dispatch={() => {
          return null;
        }}
      />,
    );

    const activeInputs = getByTestId('CookTime__activeInputs');
    fireEvent.change(within(activeInputs).getByLabelText('hours'), { target: { value: '123' } });
    expect(within(activeInputs).getByLabelText('hours')).toHaveValue('123');
  });

  it('cannot receive negative or nonstring value', async () => {
    const { getByTestId } = render(
      <CookTime
        activeTime={timeValues.suppliedActive}
        waitingTime={timeValues.suppliedWaiting}
        isEditMode
        dispatch={() => {
          return null;
        }}
      />,
    );

    const activeHour = within(getByTestId('CookTime__activeInputs')).getByLabelText('hours');
    fireEvent.change(activeHour, { target: { value: '-123' } });
    expect(activeHour).toHaveValue('0');
    fireEvent.change(activeHour, { target: { value: 'abc' } });
    expect(activeHour).toHaveValue('0');
    fireEvent.change(activeHour, { target: { value: '123a' } });
    expect(activeHour).toHaveValue('123');
  });

  it('shows initial time when undo is actioned', () => {
    const EditableCookTime = () => {
      const [isEditMode, toggleIsEditMode] = React.useState(false);
      return (
        <>
          <button onClick={() => toggleIsEditMode(!isEditMode)} type="button">
            {isEditMode ? 'Undo' : 'Edit'}
          </button>
          <CookTime
            activeTime={timeValues.suppliedActive}
            waitingTime={timeValues.suppliedWaiting}
            dispatch={() => {
              return null;
            }}
            isEditMode={isEditMode}
          />
        </>
      );
    };
    const { getByText, getByTestId } = render(<EditableCookTime />);

    getByText('Edit').click();
    const activeInputs = getByTestId('CookTime__activeInputs');
    fireEvent.change(within(activeInputs).getByLabelText('hours'), { target: { value: '123' } });

    getByText('Undo').click();

    expect(getByTestId('CookTime__active').textContent).toStrictEqual(timeValues.expectedActive);
    expect(getByTestId('CookTime__waiting').textContent).toStrictEqual(timeValues.expectedWaiting);
    expect(getByTestId('CookTime__total').textContent).toStrictEqual(timeValues.expectedTotal);
  });
});
