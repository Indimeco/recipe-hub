import React from 'react';
import styled from 'styled-components';

import RecipeItem from '../RecipeItem/RecipeItem';
import Heading from '../Heading/Heading';
import Filter from '../Filter/Filter';
import withColor from '../../hocs/withColor';
import { useGlobalState } from '../../store';
import { Recipe } from '../../../../../types';

import componentStyle from './RecipeArea.style';

const RecipeArea = ({ className, color }: { className: string; color: string }): React.ReactElement => {
  const {
    state: { activeBook: book },
  } = useGlobalState();
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
