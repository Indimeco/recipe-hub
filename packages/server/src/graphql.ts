import { ApolloServer } from 'apollo-server-lambda';
import { MongoClient } from 'mongodb';

import typeDefs from './schema';
import resolvers from './resolvers';

let cachedDb = null; // FIXME cant work in lambda
// FIXME Really bad performance about 2.5s

function connectToDatabase(context) {
  const dbUrl = 'mongodb://localhost:27017'; // Database Connection
  const dbName = 'recipehub';

  // console.log('context is ', context);

  if (cachedDb) {
    console.log('=> using cached database instance');
    return Promise.resolve(cachedDb);
  }

  return MongoClient.connect(dbUrl).then(db => {
    const recipeHub = db.db(dbName);
    cachedDb = recipeHub; // TODO
    return recipeHub;
  });
}

const server = new ApolloServer({
  resolvers,
  context: async ({ event, context }) => {
    // eslint-disable-next-line
    context.callbackWaitsForEmptyEventLoop = false;
    return {
      headers: event.headers,
      functionName: context.functionName,
      event,
      context,
      db: await connectToDatabase(event),
    };
  },
  typeDefs,
});

export const graphqlHandler = server.createHandler();
