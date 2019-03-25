import React from 'react';
import styled from 'styled-components';
import componentStyle from './App.style';

import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeArea from '../RecipeArea/RecipeArea';
import Form from '../Form/Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ColorProvider } from '../../hocs/withColor';

class App extends React.Component {
  render() {
    const { className, book } = this.props;
    return (
      <Router>
        <div className={className}>
          <ColorProvider.Provider value="main">
            <Navbar
              subTheme="aux"
              banner={
                <Banner subTheme="main" el="h1">
                  Recipe Hub
                </Banner>
              }
            />
          </ColorProvider.Provider>
          <div className="content">
            <Route
              path="/"
              exact
              render={() => <RecipeArea book={book} subTheme="main" />}
            />
            <Route path="/new" render={() => <Form />} />
          </div>
          <Footer subTheme="aux" />
        </div>
      </Router>
    );
  }
}

export default styled(App)`
  ${componentStyle}
`;
