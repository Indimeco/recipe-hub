import { ObjectID } from 'mongodb';

import { Book, Recipe, User } from './types/generated/graphql';

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
          { _id: new ObjectID(bookId), 'recipes.id': id },
          {
            $set: updatePayload,
          },
        );

        return update.then(() =>
          db
            .collection('books')
            .findOne({ _id: new ObjectID(bookId) })
            .then(({ recipes }) => recipes.find(recipe => recipe.id === id)),
        );
      } catch (err) {
        throw new Error(err);
      }
    },

    createBook: async (_source, { userId, bookName }, { db }): Promise<Book> => {
      try {
        const blankBook = {
          meta: {
            name: bookName,
            favorites: 0,
            views: 0,
          },
        };

        const generatedId = await new Promise((resolve, reject) => {
          db.collection('books').insertOne({ ...blankBook, recipes: [] }, (err, res) => {
            if (err) throw reject(err);
            resolve(res.ops[0]._id);
          });
        });

        await db.collection('users').updateOne(
          { _id: new ObjectID(userId) },
          {
            $push: { books: { _id: generatedId, ...blankBook } },
          },
        );

        return db.collection('users').findOne({ _id: new ObjectID(userId) });
      } catch (err) {
        throw new Error(err);
      }
    },
  },
  Query: {
    book: async (_source, { bookId }, { db }): Promise<Book> => {
      return db.collection('books').findOne({ _id: new ObjectID(bookId) });
    },
    user: async (_source, { userId }, { db }): Promise<User> => {
      return db.collection('users').findOne({ _id: new ObjectID(userId) });
    },
  },
};
