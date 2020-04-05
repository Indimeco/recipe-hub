import React, { useState } from 'react';
import { render } from '@testing-library/react';

import ToggleEdit from './ToggleEdit';

describe('SrText', () => {
  it('renders', () => {
    const { getByText } = render(
      <ToggleEdit edit={false} onClick={() => {}} onSave={() => {}}>
        test
      </ToggleEdit>,
    );
    expect(getByText('Edit')).toBeInTheDocument();
    expect(getByText('test')).toBeInTheDocument();
  });

  it('adds save option when edit is enabled', () => {
    const mockSave = jest.fn();
    const TestComponent = () => {
      const [isEdit, setIsEdit] = useState(false);
      return (
        <ToggleEdit edit={isEdit} onClick={() => setIsEdit(!isEdit)} onSave={mockSave}>
          test
        </ToggleEdit>
      );
    };
    const { getByText } = render(<TestComponent />);
    getByText('Edit').click();
    expect(getByText('Save')).toBeInTheDocument();
    expect(getByText('Undo')).toBeInTheDocument();
    getByText('Save').click();
    expect(mockSave).toHaveBeenCalledTimes(1);
    mockSave.mockReset();
  });
});
