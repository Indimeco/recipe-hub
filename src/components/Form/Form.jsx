import React from 'react';
import styled from 'styled-components';
import componentStyle from './Form';

class RecipeItemControls extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    return (
      <div className={className}>
        <fieldset>
          <legend>New Recipe</legend>
          <input placeholder="Recipe Name" />
          <input placeholder="Preview Image" />
          <input placeholder="Recipe Source" />
          <input placeholder="Ingredients" />
          <textarea placeholder="Recipe" />
          <input placeholder="Cook Time" />
          <input placeholder="Method" />
          <input placeholder="Tags" />
        </fieldset>
      </div>
    );
  }
}

export default styled(RecipeItemControls)`
  ${componentStyle}
`;
