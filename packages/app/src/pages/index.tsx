import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from '../components/Form/Form';
import RecipeDetail from '../components/RecipeDetail/RecipeDetail';
import ErrorPage from '../components/ErrorPage/ErrorPage';

import RecipeArea from './RecipeArea/RecipeArea';

export const Pages = (): unknown => (
  <Router>
    <Switch>
      <Route
        path="/book/:bookId"
        render={({ match }: { match: unknown }): ReactElement => <RecipeArea match={match} color="main" />}
      />

      <Route path="/new" render={(): ReactElement => <Form color="main" />} />

      <Route
        path="/view/:id"
        render={({ match }: { match: unknown }): ReactElement => <RecipeDetail match={match} color="root" />}
      />

      <Route render={(): ReactElement => <ErrorPage />} />
    </Switch>
  </Router>
);

export default Pages;
