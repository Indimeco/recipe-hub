import React, { useEffect, useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, UpdateRecipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { EDIT_RECIPE } from '../../hooks/edit';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Button from '../../components/Button/Button';

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

  const handlePayload: React.Reducer<Partial<UpdateRecipe> | null, { type: string; value: any }> = (state, arg) => {
    switch (arg.type) {
      case 'update':
        return { ...state, ...arg.value };
      case 'clear':
        return null;
      default:
        throw new Error('Unsupported recipe payload action');
    }
  };
  const [payload, dispatch] = useReducer(handlePayload, {});
  const [isEditMode, toggleIsEditMode] = React.useState(false);

  const handleSave = () => {
    editRecipe({ variables: { recipeFragment: { bookId, id: recipeId, ...payload } } });
    toggleIsEditMode(false);
  };

  const book: Book = data?.book;
  const recipe: any = book?.recipes?.find(x => x?.id === recipeId);

  const isLoading = bookLoading || editLoading;
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

  // TODO refactor out controls into subcomponent
  // TODO implement single edit and save for all subcomponents
  // TODO improve design of edit and save buttons
  return (
    <>
      <>
        <Button circle={false} onClick={() => toggleIsEditMode(!isEditMode)}>
          {isEditMode ? 'Undo' : 'Edit'}
        </Button>
        {isEditMode && (
          <Button circle={false} onClick={handleSave}>
            Save
          </Button>
        )}
      </>
      <RecipeWrapper>
        <RecipeIntro>
          <RecipeName name={recipe.name} handleSave={mergePayloadAndEditRecipe} />
          <CookTime
            isEditMode={isEditMode}
            dispatch={dispatch}
            activeTime={recipe.activeTime}
            waitingTime={recipe.waitingTime}
            handleSave={mergePayloadAndEditRecipe}
          />
          <RecipeImage previewImage={recipe.previewImage} handleSave={mergePayloadAndEditRecipe} />
          <IngredientsList ingredients={recipe.ingredients} handleSave={mergePayloadAndEditRecipe} />
        </RecipeIntro>
        <RecipeDirections directions={recipe.directions} handleSave={mergePayloadAndEditRecipe} />
      </RecipeWrapper>
    </>
  );
};

export default RecipeDetail;
