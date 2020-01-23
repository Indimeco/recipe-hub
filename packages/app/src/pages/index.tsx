import React, { ReactElement } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage/ErrorPage';
import { RecipeAreaMatch, RecipeDetailMatch } from '../../types';

import BookArea from './BookArea/BookArea';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import RecipeArea from './RecipeArea/RecipeArea';

export const Pages = () => (
  <Switch>
    <Route path="/" exact render={(): ReactElement => <BookArea />} />

    <Route
      path="/book/:bookId"
      exact
      render={({ match }: RecipeAreaMatch): ReactElement => <RecipeArea match={match} />}
    />

    <Route
      path="/book/:bookId/:recipeId"
      exact
      render={({ match }: RecipeDetailMatch): ReactElement => <RecipeDetail match={match} />}
    />

    <Route render={(): ReactElement => <ErrorPage />} />
  </Switch>
);

export default Pages;
