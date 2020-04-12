import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, UpdateRecipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { EDIT_RECIPE } from '../../hooks/edit';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { RecipeDetailMatch } from '../../../types';

import { RecipeDirections, RecipeName, CookTime, IngredientsList, RecipeImage } from './components';
import { RecipeWrapper, RecipeIntro } from './RecipeDetail.style';

const RecipeDetail = ({
  match: {
    params: { bookId, recipeId },
  },
}: RecipeDetailMatch) => {
  const { loading: bookLoading, error: bookError, data } = useQuery(GET_BOOK, {
    variables: { bookId },
    partialRefetch: true,
  });

  const [editRecipe, { loading: editLoading, error: editError }] = useMutation(EDIT_RECIPE);
  const mergePayloadAndEditRecipe = (payload: Partial<UpdateRecipe>) => {
    editRecipe({ variables: { recipeFragment: { bookId, id: recipeId, ...payload } } });
  };

  if ((bookLoading || editLoading) && !data) return <Loading />;
  if (bookError || editError) return <ErrorPage />;

  const { book }: { book: Book } = data;
  if (!book) return <ErrorPage />;

  const recipe = book.recipes?.find(x => x?.id === recipeId);
  if (!recipe) return <ErrorPage />;
  return (
    <RecipeWrapper>
      <RecipeIntro>
        <RecipeName name={recipe.name} handleSave={mergePayloadAndEditRecipe} />
        <CookTime
          activeTime={recipe.activeTime}
          waitingTime={recipe.waitingTime}
          handleSave={mergePayloadAndEditRecipe}
        />
        <RecipeImage previewImage={recipe.previewImage} handleSave={mergePayloadAndEditRecipe} />
        <IngredientsList ingredients={recipe.ingredients} handleSave={mergePayloadAndEditRecipe} />
      </RecipeIntro>
      <RecipeDirections directions={recipe.directions} handleSave={mergePayloadAndEditRecipe} />
    </RecipeWrapper>
  );
};

export default RecipeDetail;
