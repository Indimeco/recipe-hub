import { GraphQLDate } from 'graphql-iso-date';

import { Book, Recipe, User } from './types/generated/graphql';
import { booksCollection } from './config';
import { oId } from './utils/oId';
import { getUser } from './queries/getUser';
import { createUser, createBook } from './mutations';

export default {
  Date: GraphQLDate,
  Mutation: {
    createUser: async (_source, { userName }, { db }): Promise<User> => {
      try {
        const userId = await createUser({ userName, db });
        return getUser({ userId, db });
      } catch (err) {
        throw new Error(err);
      }
    },
    createRecipe: async (_source, { bookId }, { db }): Promise<Recipe> => {
      try {
        const blankRecipe = {
          name: 'New Recipe',
          _id: oId(),
          lastModified: new Date(),
        };

        const update = db.collection(booksCollection).updateOne(
          { _id: oId(bookId) },
          {
            $addToSet: { recipes: blankRecipe },
            $set: { lastModified: new Date() },
          },
        );

        return update.then(() => db.collection(booksCollection).findOne({ _id: oId(bookId) }));
      } catch (err) {
        throw new Error(err);
      }
    },

    editRecipe: async (_source, { recipeFragment }, { db }): Promise<Recipe> => {
      try {
        const { bookId: strBookId, _id: strId, ...rest } = recipeFragment;
        const bookId = oId(strBookId);

        const updatePayload = {};
        Object.entries(rest).forEach(([key, value]) => {
          updatePayload[`recipes.$.${key}`] = value;
        });

        const update = db.collection(booksCollection).updateOne(
          { _id: bookId, 'recipes._id': oId(strId) },
          {
            $currentDate: {
              'recipes.$.lastModified': true,
              lastModified: true,
            },
            $set: updatePayload,
          },
        );

        return update.then(() => db.collection(booksCollection).findOne({ _id: bookId }));
      } catch (err) {
        throw new Error(err);
      }
    },

    createBook: async (_source, { userId, bookName }, { db }): Promise<User> => {
      try {
        const newBook = {
          name: bookName,
          favorites: 0,
          views: 0,
          recipes: [],
          owner: oId(userId),
          lastModified: new Date(),
        };

        await createBook({ db, newBook, userId: oId(userId) });
        return getUser({ db, userId: oId(userId) });
      } catch (err) {
        throw new Error(err);
      }
    },

    editBookName: async (_source, { bookId, newBookName }, { db }): Promise<Book> => {
      try {
        await db
          .collection(booksCollection)
          .updateOne({ _id: oId(bookId) }, { $set: { name: newBookName, lastModified: new Date() } });

        return db.collection(booksCollection).findOne({ _id: oId(bookId) });
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Query: {
    book: async (_source, { bookId }, { db }): Promise<Book> => {
      return db.collection(booksCollection).findOne({ _id: oId(bookId) });
    },
    user: async (_source, { userId, lastBook }, { db }): Promise<User> => {
      return getUser({ db, userId: oId(userId), lastBook });
    },
  },
};
