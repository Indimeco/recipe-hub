import React, { useEffect, useReducer } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, UpdateRecipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { EDIT_RECIPE } from '../../hooks/edit';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import Button from '../../components/Button/Button';

import { RecipeDirections, RecipeName, CookTime, IngredientsList, RecipeImage } from './components';
import { RecipeWrapper, RecipeIntro, EditControlsLayout } from './RecipeDetail.style';

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
    editRecipe({ variables: { recipeFragment: { bookId, _id: recipeId, ...payload } } });
    toggleIsEditMode(false);
  };

  const book: Book = data?.book;
  const recipe: any = book?.recipes?.find((x) => x?._id === recipeId);

  const isLoading = bookLoading || editLoading;
  const isError = bookError || editError || !book || !recipe;

  useEffect(() => {
    if (!isLoading || !isError) {
      setNavLinks([
        { name: 'My Books', path: '/book' },
        { name: book.name, path: `/book/${book._id}` },
        { name: recipe.name, path: null },
      ]);
    }
  }, [data, book, isError, isLoading, setNavLinks, recipe]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  const recipeDetailControlProps = {
    isEditMode,
    dispatch,
  };

  // TODO improve types for dispatch in subcomponents
  return (
    <form>
      <EditControlsLayout>
        <Button circle onClick={() => toggleIsEditMode(!isEditMode)}>
          {isEditMode ? 'Undo' : 'Edit'}
        </Button>
        {isEditMode && (
          <Button circle onClick={handleSave} type="submit">
            Save
          </Button>
        )}
      </EditControlsLayout>
      <RecipeWrapper>
        <RecipeIntro>
          <RecipeName name={recipe.name} {...recipeDetailControlProps} />
          <CookTime {...recipeDetailControlProps} activeTime={recipe.activeTime} waitingTime={recipe.waitingTime} />
          <div>
            <RecipeImage {...recipeDetailControlProps} previewImage={recipe.previewImage} />
          </div>
          <IngredientsList ingredients={recipe.ingredients} {...recipeDetailControlProps} />
        </RecipeIntro>
        <RecipeDirections directions={recipe.directions} {...recipeDetailControlProps} />
      </RecipeWrapper>
    </form>
  );
};

export default RecipeDetail;
