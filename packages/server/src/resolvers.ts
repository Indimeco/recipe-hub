import { Book, Recipe } from '../../../types';

export default {
  Mutation: {
    editRecipe: async (_source, { recipeFragment }, { dataSources }): Promise<Recipe> => {
      return dataSources.hubApi.editRecipe(recipeFragment);
    },
  },
  Query: {
    book: async (_source, { bookId }, { dataSources }): Promise<Book> => {
      return dataSources.hubApi.getBook(bookId);
    },
  },
};
