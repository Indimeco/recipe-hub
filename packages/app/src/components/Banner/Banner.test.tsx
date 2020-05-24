import React from 'react';

import { render } from '../../utils/testUtils/testing-library';

import Banner from './Banner';

describe('Banner', () => {
  it('renders', () => {
    const { getByText } = render(<Banner>Test Banner</Banner>);
    expect(getByText('Test Banner')).toBeInTheDocument();
  });
});
