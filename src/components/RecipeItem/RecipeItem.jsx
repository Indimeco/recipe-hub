import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';

class RecipeItem extends React.Component {
  render() {
    const { className, key, link, name, preview, ...restProps } = this.props;
    return (
      <a className={className} key={key} href={link} {...restProps}>
        <div className="recipe-card">
          <Heading el="h3">{name}</Heading>
          <Image src={preview} alt="" />
          <div className={`${className} recipe-item-controls`}>
            <button>Edit</button>
            <button>Favorite</button>
            <button>View</button>
          </div>
        </div>
      </a>
    );
  }
}

export default styled(RecipeItem)`
  ${componentStyle}
`;
