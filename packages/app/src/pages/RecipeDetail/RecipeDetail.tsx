import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Book } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { RecipeDetailMatch } from '../../../types';

import RecipeDirections from './components/RecipeDirections';
import IngredientsList from './components/IngredientsList';
import CookTime from './components/CookTime';
import { RecipeWrapper, RecipeIntro } from './RecipeDetail.style';

const RecipeDetail = ({
  match: {
    params: { bookId, recipeId },
  },
}: RecipeDetailMatch) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const { book }: { book: Book } = data;
  if (!book) return <ErrorPage />;

  const recipe = book.recipes?.find(x => x.id === recipeId);
  if (!recipe) return <ErrorPage />;
  return (
    <RecipeWrapper>
      <RecipeIntro>
        <Heading el="h2">{recipe.name}</Heading>
        <CookTime active={recipe.activeTime} waiting={recipe.waitingTime} />
        <Image src={recipe.previewImage} />
        <IngredientsList ingredients={recipe.ingredients} />
      </RecipeIntro>
      <RecipeDirections directions={recipe.directions} />
    </RecipeWrapper>
  );
};

export default RecipeDetail;
