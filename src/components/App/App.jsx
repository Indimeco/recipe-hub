import React from 'react';
import styled from 'styled-components';
import componentStyle from './App.style';

import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import RecipeArea from '../RecipeArea/RecipeArea';
import RecipeItem from '../RecipeItem/RecipeItem';

class App extends React.Component {
  render() {
    const { className, book } = this.props;
    return (
      <div className={className}>
        <Navbar
          subTheme="aux"
          banner={
            <Banner subTheme="main" el="h1">
              Recipe Hub
            </Banner>
          }
        />
        <div className="content">
          <section id="#recipes">
            <RecipeArea bookName="myBook">
              {Object.keys(book.myBook).map(recipe => {
                return (
                  <RecipeItem
                    subTheme="root"
                    key={recipe}
                    name={recipe}
                    link={book.myBook[recipe]['recipe source']}
                    preview={book.myBook[recipe]['preview image']}
                  />
                );
              })}
            </RecipeArea>
          </section>
        </div>
        <Footer subTheme="aux" />
      </div>
    );
  }
}

export default styled(App)`
  ${componentStyle}
`;
