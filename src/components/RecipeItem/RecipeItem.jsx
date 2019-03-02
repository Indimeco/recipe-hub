import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Form from '../Form/Form';

class RecipeItem extends React.Component {
  render() {
    const { className, key, link, name, preview, ...restProps } = this.props;
    return (
      <div className={className} key={key} {...restProps}>
        <div className="recipe-card">
          <a href={link}>
            <Heading el="h3">{name}</Heading>
          </a>
          <a href={link}>
            <Image src={preview} alt="" />
          </a>
          <div className={`${className} recipe-item-controls`}>
            <button onClick={e => <Form />}>Edit</button>
            <button>Favorite</button>
            <button>View</button>
          </div>
        </div>
      </div>
    );
  }
}

export default styled(RecipeItem)`
  ${componentStyle}
`;
