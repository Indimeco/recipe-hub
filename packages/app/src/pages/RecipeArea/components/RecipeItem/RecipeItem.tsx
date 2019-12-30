import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';

import { RecipeCard, RecipeHeading, RecipeItemControls } from './RecipeItem.style';

export const RecipeItem = ({
  link,
  name,
  preview,
}: {
  key: string;
  link: string;
  name: string;
  preview?: string | null;
}): React.ReactElement => (
  <RecipeCard>
    <Link to={link}>
      <RecipeHeading>{name}</RecipeHeading>
    </Link>
    <Link to={link}>
      <Image src={preview} alt="" />
    </Link>
    <RecipeItemControls>
      <Button>
        <FontAwesomeIcon icon={faHeart} />
      </Button>

      <Button>
        <FontAwesomeIcon icon={faExternalLinkAlt} />
      </Button>
    </RecipeItemControls>
  </RecipeCard>
);

export default RecipeItem;
