import React from 'react';
import styled from 'styled-components';
import componentStyle from './App.style';

import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RecipeArea from '../../components/RecipeArea/RecipeArea';
import Form from '../../components/Form/Form';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import withColor from '../../hocs/withColor';

class App extends React.Component {
  render() {
    const { className, book, ...restProps } = this.props;
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
            <Route
              path="/"
              exact
              render={() => <RecipeArea book={book} color="main" />}
            />
            <Route path="/new" render={() => <Form color="main" />} />
            <Route
              path="/view/:name"
              render={props => (
                <RecipeDetail {...props} book={book} color="root" />
              )}
            />
          </div>
          <Footer color="aux" />
        </div>
      </Router>
    );
  }
}

export default withColor(
  styled(App)`
    ${componentStyle}
  `
);
