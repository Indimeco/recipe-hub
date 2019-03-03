import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Form from '../Form/Form';
import ModalButton from '../ModalButton/ModalButton';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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

            <ModalButton buttonContent={<FontAwesomeIcon icon={faPen} />} modalContent={<Form />} />

            <button>
              <FontAwesomeIcon icon={faHeart} />
            </button>

            <button>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}

export default styled(RecipeItem)`
  ${componentStyle}
`;
