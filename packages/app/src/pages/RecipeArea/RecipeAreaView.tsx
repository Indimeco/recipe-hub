import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { Recipe } from '../../../../../types';
import Button from '../../components/Button/Button';

import Filter, { sortByRecent } from './components/Filter/Filter';
import { HeadingLayout, RecipesLayout, RecipeHeading, ToolsLayout, ToolsText } from './RecipeArea.style';
import RecipeItem from './components/RecipeItem/RecipeItem';

interface RecipeAreaViewProps {
  recipes: Recipe[] | [];
  bookName: string;
  bookId: string;
  createRecipe: any;
}
export const RecipeAreaView: React.FunctionComponent<RecipeAreaViewProps> = ({
  recipes: initialRecipes,
  bookName,
  bookId,
  createRecipe,
}) => {
  const [recipes, setRecipes] = useState(sortByRecent(initialRecipes));
  return (
    <section>
      <HeadingLayout>
        <RecipeHeading>{bookName}</RecipeHeading>
        <Filter setRecipes={setRecipes} />
      </HeadingLayout>
      <ToolsLayout>
        <ToolsText htmlFor="RecipeAreaView__addButton">Add a recipe</ToolsText>
        <Button id="RecipeAreaView__addButton" circle onClick={() => createRecipe({ variables: { bookId } })}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </ToolsLayout>
      <RecipesLayout>
        {recipes.map((recipe) => {
          return (
            recipe && (
              <RecipeItem
                key={`recipe-${recipe._id}`}
                name={recipe.name}
                link={`/book/${bookId}/${recipe._id}`}
                preview={recipe?.previewImage}
              />
            )
          );
        })}
      </RecipesLayout>
    </section>
  );
};

export default RecipeAreaView;
