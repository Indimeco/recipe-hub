import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';

import { GET_BOOK } from '../../hooks/data';
import BookData from '../../mocks/GET_BOOK';

import RecipeArea from './RecipeArea';

const mocks = [
  {
    request: {
      query: GET_BOOK,
      variables: {
        bookId: '1',
      },
    },
    result: {
      ...BookData,
    },
  },
];

describe('RecipeArea', () => {
  it('renders book title', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <RecipeArea setNavLinks={() => null} match={{ params: { bookId: '1' } }} />
        </Router>
      </MockedProvider>,
    );

    const result = await findByText(`Jake's Recipes`);
    expect(result).toBeInTheDocument();
  });
});
