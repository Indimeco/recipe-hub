import React from 'react';
import styled from 'styled-components';
import componentStyle from './App.style';

import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeArea from '../RecipeArea/RecipeArea';
import Form from '../Form/Form';
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
            <Route path="/new" render={() => <Form />} />
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
