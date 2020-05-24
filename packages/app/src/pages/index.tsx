import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorPage from '../components/ErrorPage/ErrorPage';
import Banner from '../components/Banner/Banner';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Layout from '../components/Layout/Layout';

import RecipeArea from './RecipeArea/RecipeArea';
import RecipeDetail from './RecipeDetail/RecipeDetail';
import BookArea from './BookArea/BookArea';

const routes = [
  {
    path: ['/', '/book'],
    exact: true,
    Component: BookArea,
  },
  {
    path: '/book/:bookId',
    exact: true,
    Component: RecipeArea,
  },
  {
    path: '/book/:bookId/:recipeId',
    exact: true,
    Component: RecipeDetail,
  },
  {
    exact: false,
    Component: ErrorPage,
  },
];

const userId = '746573747573657269644030'; // TODO get userId from cookie

export const Pages = () => {
  const [navLinks, setNavLinks] = useState([{ name: 'My Books', path: '/book' }]);
  return (
    <>
      <Banner>Recipe Hub</Banner>
      <Navbar links={navLinks} />
      <Layout>
        <Switch>
          {routes.map(({ path, exact, Component }) => (
            <Route
              {...{ path, exact }}
              key={`Route-${typeof path === 'string' ? path : path?.find(x => x)}`}
              render={({ match }) => <Component {...{ match, setNavLinks, userId }} />}
            />
          ))}
        </Switch>
      </Layout>
      <Footer />
    </>
  );
};

export default Pages;
