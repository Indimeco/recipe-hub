import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, UpdateRecipe } from '../../../../../types';
import { GET_BOOK, EDIT_RECIPE } from '../../hooks/data';
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
  const { loading: bookLoading, error: bookError, data } = useQuery(GET_BOOK, {
    variables: { bookId },
  });

  const [editRecipe, { loading: editLoading, error: editError }] = useMutation(EDIT_RECIPE);
  const mergePayloadAndEditRecipe = (payload: Partial<UpdateRecipe>) => {
    editRecipe({ variables: { recipeFragment: { bookId, id: recipeId, ...payload } } });
  };

  if (bookLoading || editLoading) return <Loading />;
  if (bookError || editError) return <ErrorPage />;

  const { book }: { book: Book } = data;
  if (!book) return <ErrorPage />;

  const recipe = book.recipes?.find(x => x.id === recipeId);
  if (!recipe) return <ErrorPage />;
  return (
    <RecipeWrapper>
      <RecipeIntro>
        <Heading el="h2">{recipe.name}</Heading>
        <CookTime
          activeTime={recipe.activeTime}
          waitingTime={recipe.waitingTime}
          handleSave={mergePayloadAndEditRecipe}
        />
        <Image src={recipe.previewImage} />
        <IngredientsList ingredients={recipe.ingredients} />
      </RecipeIntro>
      <RecipeDirections directions={recipe.directions} handleSave={mergePayloadAndEditRecipe} />
    </RecipeWrapper>
  );
};

export default RecipeDetail;
