import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeArea.style';
import RecipeItem from '../RecipeItem/RecipeItem';
import Heading from '../Heading/Heading';

class RecipeArea extends React.Component {
  render() {
    const { className, subTheme, bookName, children } = this.props;
    return (
      <div className={className}>
        <Heading el="h2">{bookName}</Heading>
        <div className="recipe-list">{children}</div>
      </div>
    );
  }
}

export default styled(RecipeArea)`
  ${componentStyle}
`;
