import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient } from 'mongodb';

import { Book, Recipe, User } from '../generated/graphql';

import typeDefs from './schema';
import { BooksApi, UsersApi } from './datasources'; // Database Name

const dbUrl = 'mongodb://localhost:27017'; // Database Connection
const dbName = 'recipehub';

let cachedDb = null;

function connectToDatabase(uri) {
  console.log('=> connect to database');

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(uri).then(db => {
    const recipeHub = db.db(dbName);
    cachedDb = recipeHub;
    return cachedDb;
  });
}

const server = async () => {
  const db = await connectToDatabase(dbUrl);
  const booksApi = new BooksApi(db.collection('books'));
  const usersApi = new UsersApi(db.collection('users'));

  return new ApolloServer({
    resolvers: {
      Mutation: {
        editRecipe: async (_source, { recipeFragment }): Promise<Recipe> => {
          return booksApi.editRecipe(recipeFragment);
        },
      },
      Query: {
        book: async (_source, { bookId }): Promise<Book> => {
          return booksApi.getBook(bookId);
        },
        user: async (_source, { userId }): Promise<User> => {
          return usersApi.getUser(userId);
        },
      },
    },
    typeDefs,
  });
};

export const graphqlHandler = server().then(s => s.createHandler());
