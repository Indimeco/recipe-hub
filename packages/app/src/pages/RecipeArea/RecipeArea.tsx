import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import RecipeItem from '../../components/RecipeItem/RecipeItem';
import Heading from '../../components/Heading/Heading';
import Filter from '../../components/Filter/Filter';
import { Recipe } from '../../../../../types';
import { GET_BOOK } from '../../hooks/data';
import Loading from '../../components/Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

import componentStyle from './RecipeArea.style';

const RecipeArea = ({
  color,
  match: {
    params: { bookId },
  },
}: {
  color: string;
  match: { params: { bookId: string } };
}): React.ReactElement => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { bookId },
  });

  if (loading) return <Loading />;
  if (error) return <ErrorPage />;

  const { book } = data;
  if (!book) return <ErrorPage />;
  return (
    <section className={className}>
      <Heading el="h2">{book.meta.name}</Heading>
      <Filter color="main" />
      <div className="recipe-list">
        {book?.recipes?.map((recipe: Recipe) => {
          return (
            <RecipeItem
              color={color}
              key={`recipe${recipe}`}
              name={recipe.name}
              link={`/view/${recipe.id}`}
              preview={recipe.previewImage}
            />
          );
        })}
      </div>
    </section>
  );
};

export default withColor(
  styled(RecipeArea)`
    ${componentStyle}
  `,
);
