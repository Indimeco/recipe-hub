import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import RecipeItemControls from '../RecipeItemControls/RecipeItemControls';

class RecipeItem extends React.Component {
  render() {
    const { className, key, link, name, preview, ...restProps } = this.props;
    return (
      <a className={className} key={key} href={link} {...restProps}>
        <h2>{name}</h2>
        <img src={preview} />
        <RecipeItemControls />
      </a>
    );
  }
}

export default styled(RecipeItem)`
  ${componentStyle}
`;
