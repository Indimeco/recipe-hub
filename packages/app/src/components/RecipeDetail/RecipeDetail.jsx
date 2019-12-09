import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withColor from '../../hocs/withColor';
import Heading from '../Heading/Heading';
import Image from '../Image/Image';

import { recipeDetailStyle, recipeIntroStyle } from './RecipeDetail.style.js';
import CookTime from './components/CookTime';
import IngredientsList from './components/IngredientsList';
import RecipeDirections from './components/RecipeDirections';

const RecipeIntro = styled.div`
  ${recipeIntroStyle}
`;

const RecipeWrapper = styled.div`
  ${recipeDetailStyle}
`;

const RecipeDetail = ({
  match: {
    params: { id },
  },
  book,
  color,
  handleSubmit,
}) => {
  const recipe = book.recipes.find(recipe => recipe.id === id);

  return (
    <RecipeWrapper color={color}>
      <RecipeIntro color={color}>
        <Heading el="h2">{recipe.name.value}</Heading>
        <CookTime
          color="main"
          active={recipe.activeTime.value}
          waiting={recipe.waitingTime.value}
          handleSubmit={handleSubmit.bind(null, id)}
        />
        <Image src={recipe.previewImage.value} />
        <IngredientsList ingredients={recipe.ingredients.value} />
      </RecipeIntro>
      <RecipeDirections directions={recipe.directions.value} />
    </RecipeWrapper>
  );
};

RecipeDetail.propTypes = {
  match: PropTypes.object,
  book: PropTypes.object,
  color: PropTypes.object,
  handleSubmit: PropTypes.func,
};

export default withColor(RecipeDetail);
