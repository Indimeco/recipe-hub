import React, { ReactElement, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';

import componentStyle from './App.style';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RecipeArea from './components/RecipeArea/RecipeArea';
import Form from './components/Form/Form';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import withColor from './hocs/withColor';
import { useGlobalState } from './store';
import { queryBook } from './hooks/data';

const App = ({ className, bookId }: { className: string; bookId: string }): any => {
  const { loading, error, data } = useQuery(queryBook(bookId));
  const { dispatch } = useGlobalState();

  // TODO make all components rely on stored activeBook state rather than book being passed down
  const book = data?.book;
  useEffect(() => {
    if (book) {
      // FIXME firing twice during render
      dispatch({ payload: book, type: 'activeBook' });
    }
  }, [bookId, book, dispatch]);
  const updateRecipe = () => () => null;
  return (
    <Router>
      <div className={className}>
        <Navbar
          color="aux"
          banner={
            <Banner color="main" el="h1">
              Recipe Hub
            </Banner>
          }
        />
        <div className="content">
          <Switch>
            <Route
              path="/"
              exact
              render={(): ReactElement => (book ? <RecipeArea book={book} color="main" /> : <div>Loading...</div>)}
            />

            <Route path="/new" render={() => <Form color="main" />} />

            <Route
              path="/view/:id"
              render={({ match }: { match: any }): ReactElement =>
                book ? (
                  <RecipeDetail match={match} book={book} handleSubmit={updateRecipe()} color="root" />
                ) : (
                  <div>Loading...</div>
                )
              }
            />

            <Route render={(): ReactElement => <ErrorPage />} />
          </Switch>
        </div>
        <Footer color="aux" />
      </div>
    </Router>
  );
};

export default withColor(
  styled(App)`
    ${componentStyle}
  `,
);
