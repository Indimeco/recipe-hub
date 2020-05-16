import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, UpdateRecipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { EDIT_RECIPE } from '../../hooks/edit';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

import { RecipeDirections, RecipeName, CookTime, IngredientsList, RecipeImage } from './components';
import { RecipeWrapper, RecipeIntro } from './RecipeDetail.style';

type PropTypes = {
  match: { params: { bookId: string; recipeId: string } };
  setNavLinks: any;
};

const RecipeDetail: React.FunctionComponent<PropTypes> = ({
  match: {
    params: { bookId, recipeId },
  },
  setNavLinks,
}) => {
  const { loading: bookLoading, error: bookError, data } = useQuery(GET_BOOK, {
    variables: { bookId },
    partialRefetch: true,
  });

  const [editRecipe, { loading: editLoading, error: editError }] = useMutation(EDIT_RECIPE);
  const mergePayloadAndEditRecipe = (payload: Partial<UpdateRecipe>) => {
    editRecipe({ variables: { recipeFragment: { bookId, id: recipeId, ...payload } } });
  };

  const book: Book = data?.book;
  const recipe: any = book?.recipes?.find(x => x?.id === recipeId);

  const isLoading = (bookLoading || editLoading) && !data;
  const isError = bookError || editError || !book || !recipe;

  useEffect(() => {
    if (!isLoading || !isError) {
      setNavLinks([
        { name: 'My Books', path: '/book' },
        { name: book.meta.name, path: `/book/${book._id}` },
        { name: recipe.name, path: null },
      ]);
    }
  }, [data, book, isError, isLoading, setNavLinks, recipe]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;
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
