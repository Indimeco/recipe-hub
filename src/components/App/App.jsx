import React from 'react';
import styled from 'styled-components';
import componentStyle from './App.style';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeArea from '../RecipeArea/RecipeArea';

class App extends React.Component {
  render() {
    const { className, book } = this.props;
    return (
      <div className={className}>
        <Navbar />
        <div className="content">
          <section id="#recipes">
            <RecipeArea recipes={book.myBook} bookName="myBook" />
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

export default styled(App)`
  ${componentStyle}
`;
