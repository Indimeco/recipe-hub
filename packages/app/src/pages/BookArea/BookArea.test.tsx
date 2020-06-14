import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';

import { GET_USER } from '../../hooks/data';
import UserData from '../../mocks/GET_USER';

import BookArea from './BookArea';

const userId = '746573747573657269644030';

const mocks = [
  {
    request: {
      query: GET_USER,
      variables: {
        userId,
      },
    },
    result: {
      ...UserData,
    },
  },
];

describe('BookArea', () => {
  it('renders book title', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <BookArea setNavLinks={() => null} userId={userId} />
        </Router>
      </MockedProvider>,
    );

    const result = await findByText(`21032 Potato Recipes`);
    expect(result).toBeInTheDocument();
  });

  it('shows modal after clicking create', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <BookArea setNavLinks={() => null} userId={userId} />
        </Router>
      </MockedProvider>,
    );

    const button = await findByText(`Create new book`);
    button.click();

    const inputLabel = await findByText('New book name');
    expect(inputLabel).toBeInTheDocument();
  });

  it('shows views and favorites', async () => {
    const { findByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <BookArea setNavLinks={() => null} userId={userId} />
        </Router>
      </MockedProvider>,
    );

    const result = await findByText((content, node) => {
      const hasText = (target: Element) => target.textContent === `Favorites for 21032 Potato Recipes: 0`;
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

      return nodeHasText && childrenDontHaveText;
    });

    expect(result).toBeInTheDocument();
  });

  it('has settings button to change book name', async () => {
    const { findByText, findByLabelText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <BookArea setNavLinks={() => null} userId={userId} />
        </Router>
      </MockedProvider>,
    );

    const button = await findByLabelText(`Settings for 21032 Potato Recipes`);
    button.click();

    const dropDownItem = await findByText(`Change name`);
    dropDownItem.click();

    const inputLabel = await findByText('Change book name for 21032 Potato Recipes');
    expect(inputLabel).toBeInTheDocument();
  });
});
