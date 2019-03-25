import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeItem.style';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPen,
  faHeart,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

class RecipeItem extends React.Component {
  render() {
    const {
      className,
      subTheme,
      key,
      link,
      name,
      preview,
      ...restProps
    } = this.props;
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
            <Button subTheme={subTheme}>
              <Link to="/new">
                <FontAwesomeIcon icon={faPen} />
              </Link>
            </Button>

            <Button subTheme={subTheme}>
              <FontAwesomeIcon icon={faHeart} />
            </Button>

            <Button subTheme={subTheme}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default styled(RecipeItem)`
  ${componentStyle}
`;
