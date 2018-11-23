import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItemControls.style';

class RecipeItemControls extends React.Component {
  render() {
    const { className, link, ...restProps } = this.props;
    return (
      <div className={className}>
        <button>Edit</button>
        <button>Favorite</button>
        <button>View</button>
      </div>
    );
  }
}

export default styled(RecipeItemControls)`
  ${componentStyle}
`;
