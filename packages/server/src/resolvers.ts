import { ObjectID } from 'mongodb';

import { Book, Recipe, User } from './types/generated/graphql';

const books = 'books';
const users = 'users';

const oId = (id?: string) => new ObjectID(id);

export default {
  Mutation: {
    createRecipe: async (_source, { bookId }, { db }): Promise<Recipe> => {
      try {
        const newId = oId();
        const blankRecipe = {
          name: 'New Recipe',
          id: newId,
        };

        const update = db.collection(books).updateOne(
          { _id: oId(bookId) },
          {
            $addToSet: { recipes: blankRecipe },
          },
        );

        return update.then(() => db.collection(books).findOne({ _id: oId(bookId) }));
      } catch (err) {
        throw new Error(err);
      }
    },

    editRecipe: async (_source, { recipeFragment }, { db }): Promise<Recipe> => {
      try {
        const { bookId, id, ...rest } = recipeFragment;

        const updatePayload = {};
        Object.entries(rest).forEach(([key, value]) => {
          updatePayload[`recipes.$.${key}`] = value;
        });

        const update = db.collection(books).updateOne(
          { _id: oId(bookId), 'recipes.id': oId(id) },
          {
            $set: updatePayload,
          },
        );

        return update.then(() =>
          db
            .collection(books)
            .findOne({ _id: oId(bookId) })
            .then(({ recipes }) => recipes.find(recipe => recipe.id === oId(id))),
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
          db.collection(books).insertOne({ ...blankBook, recipes: [] }, (err, res) => {
            if (err) throw reject(err);
            resolve(res.ops[0]._id);
          });
        });

        await db.collection(users).updateOne(
          { _id: oId(userId) },
          {
            $addToSet: { books: { _id: generatedId, ...blankBook } },
          },
        );

        return db.collection(users).findOne({ _id: oId(userId) });
      } catch (err) {
        throw new Error(err);
      }
    },

    editBookName: async (_source, { userId, bookId, newBookName }, { db }): Promise<User> => {
      try {
        const updateBook = db.collection(books).updateOne({ _id: oId(bookId) }, { $set: { 'meta.name': newBookName } });

        const updateUser = db
          .collection(users)
          .updateOne({ _id: oId(userId), 'books._id': oId(bookId) }, { $set: { 'books.$.meta.name': newBookName } });
        return Promise.all([updateBook, updateUser]).then(() => db.collection(users).findOne({ _id: oId(userId) }));
      } catch (err) {
        throw new Error(err);
      }
    },
  },

  Query: {
    book: async (_source, { bookId }, { db }): Promise<Book> => {
      return db.collection(books).findOne({ _id: oId(bookId) });
    },
    user: async (_source, { userId }, { db }): Promise<User> => {
      return db.collection(users).findOne({ _id: oId(userId) });
    },
  },
};
