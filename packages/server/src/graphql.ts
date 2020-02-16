import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient } from 'mongodb';

import { Book, Recipe, User } from '../generated/graphql';

import typeDefs from './schema';
import { BooksApi, UsersApi } from './datasources'; // Database Name

let cachedDb = null;

function connectToDatabase() {
  const dbUrl = 'mongodb://localhost:27017'; // Database Connection
  const dbName = 'recipehub';

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(dbUrl).then(db => {
    const recipeHub = db.db(dbName);
    cachedDb = recipeHub;
    return cachedDb;
  });
}

const server = new ApolloServer({
  resolvers: {
    Mutation: {
      editRecipe: async (_source, { recipeFragment }, { db }): Promise<Recipe> => {
        const booksApi = new BooksApi(db.collection('books'));
        return booksApi.editRecipe(recipeFragment);
      },
    },
    Query: {
      book: async (_source, { bookId }, { db }): Promise<Book> => {
        const booksApi = new BooksApi(db.collection('books'));
        return booksApi.getBook(bookId);
      },
      user: async (_source, { userId }, { db }): Promise<User> => {
        const usersApi = new UsersApi(db.collection('users'));
        return usersApi.getUser(userId);
      },
    },
  },
  context: async ({ context }) => {
    // eslint-disable-next-line
    context.callbackWaitsForEmptyEventLoop = false;
    return { db: await connectToDatabase() };
  },
  typeDefs,
});

export const graphqlHandler = server.createHandler();
