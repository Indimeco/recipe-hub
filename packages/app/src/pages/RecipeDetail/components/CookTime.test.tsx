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
  it('Renders separated time values', async () => {
    const { getByTestId } = render(
      <CookTime
        activeTime={timeValues.suppliedActive}
        waitingTime={timeValues.suppliedWaiting}
        handleSave={() => {
          console.log('handleSave called');
        }}
      />,
    );

    expect(getByTestId('CookTime__active').textContent).toStrictEqual(timeValues.expectedActive);
    expect(getByTestId('CookTime__waiting').textContent).toStrictEqual(timeValues.expectedWaiting);
    expect(getByTestId('CookTime__total').textContent).toStrictEqual(timeValues.expectedTotal);
  });

  it('changes time when edited', async () => {
    const { getByText, getByTestId } = render(
      <CookTime
        activeTime={timeValues.suppliedActive}
        waitingTime={timeValues.suppliedWaiting}
        handleSave={() => {
          console.log('handleSave called');
        }}
      />,
    );

    getByText('Edit').click();
    const activeInputs = getByTestId('CookTime__activeInputs');
    fireEvent.change(within(activeInputs).getByLabelText('hours'), { target: { value: '123' } });
    expect(within(activeInputs).getByLabelText('hours')).toHaveValue('123');
  });
});
