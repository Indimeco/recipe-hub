import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeArea.style';
import RecipeItem from '../RecipeItem/RecipeItem';
import Heading from '../Heading/Heading';
import Filter from '../Filter/Filter';

class RecipeArea extends React.Component {
  render() {
    const { className, subTheme, book } = this.props;
    return (
      <section className={className}>
        <Heading el="h2">{book.meta.name}</Heading>
        <Filter />
        <div className="recipe-list">
          {Object.keys(book.recipes).map(recipe => {
            return (
              <RecipeItem
                subTheme={subTheme}
                key={recipe}
                name={recipe}
                link={book.recipes[recipe]['recipe source']}
                preview={book.recipes[recipe]['preview image']}
              />
            );
          })}
        </div>
      </section>
    );
  }
}

export default styled(RecipeArea)`
  ${componentStyle}
`;
