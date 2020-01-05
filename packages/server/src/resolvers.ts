import { Book, Recipe, User } from '../../../types';

export default {
  Mutation: {
    editRecipe: async (_source, { recipeFragment }, { dataSources }): Promise<Recipe> => {
      return dataSources.booksApi.editRecipe(recipeFragment);
    },
  },
  Query: {
    book: async (_source, { bookId }, { dataSources }): Promise<Book> => {
      return dataSources.booksApi.getBook(bookId);
    },
    user: async (_source, { userId }, { dataSources }): Promise<User> => {
      return dataSources.usersApi.getUser(userId);
    },
  },
};
