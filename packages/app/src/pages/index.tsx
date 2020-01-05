import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from '../components/Form/Form';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { RecipeAreaMatch, RecipeDetailMatch } from '../../types';

import BookArea from './BookArea/BookArea';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import RecipeArea from './RecipeArea/RecipeArea';

export const Pages = () => (
  <Router>
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

      <Route path="/new" render={(): ReactElement => <Form color="main" />} />

      <Route render={(): ReactElement => <ErrorPage />} />
    </Switch>
  </Router>
);

export default Pages;
