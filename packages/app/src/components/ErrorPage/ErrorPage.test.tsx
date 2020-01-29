import { render } from '@testing-library/react';
import React from 'react';

import ErrorPage, { codeResponses } from './ErrorPage';

describe('ErrorPage', () => {
  it('Provides error message given error code', () => {
    const { getByText } = render(<ErrorPage code="403" />);
    expect(getByText(codeResponses['403'].title)).toBeInTheDocument();
    expect(getByText(codeResponses['403'].message)).toBeInTheDocument();
  });
});
