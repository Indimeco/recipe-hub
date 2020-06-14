import React, { useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';

import { Book, Recipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import { CREATE_RECIPE } from '../../hooks/create';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

import { RecipeAreaView } from './RecipeAreaView';

type PropTypes = {
  match: { params: { bookId: string } };
  setNavLinks: any;
};
const RecipeArea: React.FunctionComponent<PropTypes> = ({
  match: {
    params: { bookId },
  },
  setNavLinks,
}) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
    partialRefetch: true,
  });

  const [createRecipe, { loading: createLoading, error: createError }] = useMutation(CREATE_RECIPE);

  const book: Book = data?.book;
  const isLoading = loading || createLoading;
  const isError = error || createError || !book;

  useEffect(() => {
    if (!isLoading && !isError) {
      setNavLinks([
        { name: 'My Books', path: '/book' },
        { name: book?.name, path: null },
      ]);
    }
  }, [setNavLinks, book, isLoading, isError]);

  if (isLoading) return <Loading />;
  if (isError) return <ErrorPage />;

  // bit of funny typescript here to ensure recipes has the correct type despite conditional assignment
  const recipes = (book.recipes as Recipe[]) ? (book.recipes as Recipe[]) : [];

  return <RecipeAreaView bookName={book.name} bookId={bookId} recipes={recipes} createRecipe={createRecipe} />;
};

export default RecipeArea;
