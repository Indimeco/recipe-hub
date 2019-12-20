import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import componentStyle from './App.style';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import RecipeArea from './components/RecipeArea/RecipeArea';
import Form from './components/Form/Form';
import RecipeDetail from './components/RecipeDetail/RecipeDetail';
import ErrorPage from './components/ErrorPage/ErrorPage';
import withColor from './hocs/withColor';

const queryBook = bookId => gql`
{
  book(bookId: "${bookId}") {
    meta {
      name
    }
    recipes {
      id
      name
      ingredients {
        name
        quantity
        unit
      }
      directions
      waitingTime
      activeTime
      previewImage
      recipeSource
    }
  }
}
`;

const App = ({ className, bookId }) => {
  const { loading, error, data } = useQuery(queryBook(bookId));
  const book = !loading && !error ? data?.book : null;
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
            <Route path="/" exact render={() => (book ? <RecipeArea book={book} color="main" /> : 'Loading...')} />

            <Route path="/new" render={() => <Form color="main" />} />

            <Route
              path="/view/:id"
              render={({ match }) =>
                book ? (
                  <RecipeDetail match={match} book={book} handleSubmit={updateRecipe()} color="root" />
                ) : (
                  'Loading...'
                )
              }
            />

            <Route render={() => <ErrorPage />} />
          </Switch>
        </div>
        <Footer color="aux" />
      </div>
    </Router>
  );
};

App.defaultProps = {
  bookId: '1',
  className: '',
};

App.propTypes = {
  bookId: PropTypes.string,
  className: PropTypes.string,
};

export default withColor(
  styled(App)`
    ${componentStyle}
  `,
);
