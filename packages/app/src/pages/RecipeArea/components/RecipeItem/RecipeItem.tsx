import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import Image from '../../../../components/Image/Image';
import Button from '../../../../components/Button/Button';

import {
  RecipeCard,
  RecipeHeading,
  RecipeItemControls,
  RecipeItemControlSpacer,
  CenteringLink,
} from './RecipeItem.style';

const RecipeItemControl = ({ icon }: { icon: any }) => (
  <RecipeItemControlSpacer>
    <Button inlineStyle circle size="small">
      <FontAwesomeIcon icon={icon} />
    </Button>
  </RecipeItemControlSpacer>
);

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
    <CenteringLink to={link}>
      <RecipeHeading>{name}</RecipeHeading>
    </CenteringLink>
    <Link to={link}>
      <Image src={preview ?? ''} alt="" />
    </Link>
    <RecipeItemControls>
      <RecipeItemControl icon={faHeart} />
      <RecipeItemControl icon={faExternalLinkAlt} />
    </RecipeItemControls>
  </RecipeCard>
);

export default RecipeItem;
