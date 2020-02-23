import { Book, Recipe, User } from './generated/graphql';

export default {
  Mutation: {
    editRecipe: async (_source, { recipeFragment }, { db }): Promise<Recipe> => {
      try {
        const { bookId, id, ...rest } = recipeFragment;

        const updatePayload = {};
        Object.entries(rest).forEach(([key, value]) => {
          updatePayload[`recipes.$.${key}`] = value;
        });

        const update = db.collection('books').updateOne(
          { _id: bookId, 'recipes.id': id },
          {
            $set: updatePayload,
          },
        );

        return update.then(() =>
          db
            .collection('books')
            .findOne({ _id: bookId })
            .then(({ recipes }) => recipes.find(recipe => recipe.id === id)),
        );
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Query: {
    book: async (_source, { bookId }, { db }): Promise<Book> => {
      return db.collection('books').findOne({ _id: bookId });
    },
    user: async (_source, { userId }, { db }): Promise<User> => {
      return db.collection('users').findOne({ _id: userId });
    },
  },
};
