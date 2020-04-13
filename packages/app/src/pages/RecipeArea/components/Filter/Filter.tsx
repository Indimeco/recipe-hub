import React from 'react';

import { Recipe } from '../../../../../../../types';
import Input from '../../../../components/Input/Input';

interface FilterPropTypes {
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[]>>;
}
const Filter: React.FunctionComponent<FilterPropTypes> = () => (
  <div>
    <Input placeholder="Search..." />
  </div>
);

export const sortByRecent = (recipes: Recipe[]) =>
  recipes.sort((item, nextItem) => (item.lastModified < nextItem.lastModified ? 1 : -1));

export default Filter;
