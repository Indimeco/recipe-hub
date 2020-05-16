import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import Breadcrumbs from './Breadcrumbs';

const TEST_CRUMBS = [{ name: 'Hansel', path: '/through/the/woods' }];

describe('Breadcrumbs', () => {
  it('renders', () => {
    const { getByText } = render(
      <Router>
        <Breadcrumbs crumbs={TEST_CRUMBS} />
      </Router>,
    );
    expect(getByText('Hansel')).toBeInTheDocument();
  });
  it('renders links', () => {
    const { getByText } = render(
      <Router>
        <Breadcrumbs crumbs={TEST_CRUMBS} />
      </Router>,
    );
    expect(getByText('Hansel').closest('a')).toHaveAttribute('href', '/through/the/woods');
  });
});
