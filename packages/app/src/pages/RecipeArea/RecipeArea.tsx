import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, Recipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { CREATE_RECIPE } from '../../hooks/create';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import { RecipeAreaMatch } from '../../../types';

import { RecipeAreaView } from './RecipeAreaView';

const RecipeArea = ({
  match: {
    params: { bookId },
  },
}: RecipeAreaMatch): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
    partialRefetch: true,
  });

  const [createRecipe, { loading: createLoading, error: createError }] = useMutation(CREATE_RECIPE);

  if (loading || createLoading) return <Loading />;
  if (error || createError) return <ErrorPage />;

  const { book }: { book: Book } = data;
  if (!book) return <ErrorPage />;

  // bit of funny typescript here to ensure recipes has the correct type despite conditional assignment
  const recipes = (book.recipes as Recipe[]) ? (book.recipes as Recipe[]) : [];

  return <RecipeAreaView bookName={book.meta.name} bookId={bookId} recipes={recipes} createRecipe={createRecipe} />;
};

export default RecipeArea;
