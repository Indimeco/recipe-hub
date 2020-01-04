import React from 'react';
import { render } from '@testing-library/react';

import SrText from './SrText';

describe('SrText', () => {
  it('renders', () => {
    const { getByText } = render(<SrText>Test</SrText>);
    expect(getByText('Test')).toBeInTheDocument();
  });
});
