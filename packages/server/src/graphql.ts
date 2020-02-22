import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient } from 'mongodb';

import typeDefs from './schema';
import resolvers from './resolvers';

let cachedDb = null;

function connectToDatabase() {
  const dbUrl = 'mongodb://localhost:27017'; // Database Connection
  const dbName = 'recipehub';

  if (cachedDb) return Promise.resolve(cachedDb);

  return MongoClient.connect(dbUrl).then(db => {
    const recipeHub = db.db(dbName);
    cachedDb = recipeHub;
    return cachedDb;
  });
}

// REVIEW if this abstraction from the inner ApolloServer is truly beneficial
export const graphqlHandler = (event, context, callback) => {
  // eslint-disable-next-line
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then(connection =>
    new ApolloServer({
      resolvers,
      context: ({ event: e }) => {
        return {
          headers: e.headers,
          functionName: context.functionName,
          event: e,
          context,
          db: connection,
        };
      },
      typeDefs,
    }).createHandler()(event, context, callback),
  );
};
