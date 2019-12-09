import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Heading from '../Heading/Heading';
import Image from '../Image/Image';
import Button from '../Button/Button';
import withColor from '../../hocs/withColor';

import componentStyle from './RecipeItem.style';

class RecipeItem extends React.Component {
  render() {
    const { className, color, key, link, name, preview } = this.props;
    return (
      <div className={className} key={key}>
        <div className="recipe-card">
          <Link to={link}>
            <Heading el="h3">{name}</Heading>
          </Link>
          <Link to={link}>
            <Image src={preview} alt="" />
          </Link>
          <div className={`${className} recipe-item-controls`}>
            <Button color={color}>
              <FontAwesomeIcon icon={faHeart} />
            </Button>

            <Button color={color}>
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

RecipeItem.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  preview: PropTypes.string,
  key: PropTypes.string,
  link: PropTypes.string,
  name: PropTypes.string,
};

export default withColor(
  styled(RecipeItem)`
    ${componentStyle}
  `,
);
