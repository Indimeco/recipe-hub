import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import Filter from '../../components/Filter/Filter';
import { Book } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { CREATE_RECIPE } from '../../hooks/create';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { RecipeAreaMatch } from '../../../types';
import Button from '../../components/Button/Button';

import { HeadingLayout, RecipesLayout, RecipeHeading, ToolsLayout, ToolsText } from './RecipeArea.style';
import RecipeItem from './components/RecipeItem/RecipeItem';

const RecipeArea = ({
  match: {
    params: { bookId },
  },
}: RecipeAreaMatch): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
  });

  const [createRecipe, { loading: createLoading, error: createError }] = useMutation(CREATE_RECIPE);

  if (loading || createLoading) return <Loading />;
  if (error || createError) return <ErrorPage />;

  const { book }: { book: Book } = data;
  if (!book) return <ErrorPage />;
  return (
    <section>
      <HeadingLayout>
        <RecipeHeading>{book.meta.name}</RecipeHeading>
        <Filter />
      </HeadingLayout>
      <ToolsLayout>
        <ToolsText>Add a recipe</ToolsText>
        <Button circle onClick={() => createRecipe({ variables: { bookId: book._id } })}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </ToolsLayout>
      <RecipesLayout>
        {book?.recipes?.map(recipe => {
          return (
            recipe && (
              <RecipeItem
                key={`recipe-${recipe.id}`}
                name={recipe.name}
                link={`/book/${bookId}/${recipe.id}`}
                preview={recipe?.previewImage}
              />
            )
          );
        })}
      </RecipesLayout>
    </section>
  );
};

export default RecipeArea;
