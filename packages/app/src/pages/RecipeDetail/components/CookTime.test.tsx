import React from 'react';
import { render } from '@testing-library/react';

import CookTime from './CookTime';

const timeValues = {
  expectedActive: '20m',
  expectedTotal: '2hr 30m',
  expectedWaiting: '2hr 10m',
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

    expect(getByTestId('CookTime-active').textContent).toStrictEqual(timeValues.expectedActive);
    expect(getByTestId('CookTime-waiting').textContent).toStrictEqual(timeValues.expectedWaiting);
    expect(getByTestId('CookTime-total').textContent).toStrictEqual(timeValues.expectedTotal);
  });
});
