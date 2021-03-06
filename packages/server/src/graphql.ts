import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient, Db } from 'mongodb';

import typeDefs from './schema';
import resolvers from './resolvers';

let cachedDb;
function connectToDatabase() {
  const dbUri = process.env.DATABASE_URI;
  const dbName = 'recipehub';

  if (!dbUri) throw new Error();
  if (cachedDb) return Promise.resolve(cachedDb);

  return MongoClient.connect(dbUri).then((db) => {
    const recipeHub = db.db(dbName);
    cachedDb = recipeHub;
    return cachedDb;
  });
}

// REVIEW if this abstraction from the inner ApolloServer is truly beneficial
export const graphqlHandler = (event, context, callback) => {
  // eslint-disable-next-line
  context.callbackWaitsForEmptyEventLoop = false;

  connectToDatabase().then((database: Db) =>
    new ApolloServer({
      resolvers,
      context: ({ event: e }) => {
        return {
          headers: e.headers,
          functionName: context.functionName,
          event: e,
          context,
          db: database,
        };
      },
      typeDefs,
    }).createHandler()(event, context, callback),
  );
};
