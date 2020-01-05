import assert from 'assert';

import { ApolloServer } from 'apollo-server';
import { MongoClient } from 'mongodb';

import typeDefs from './schema';
import resolvers from './resolvers';
import { BooksApi, UsersApi } from './datasources';

const dbUrl = 'mongodb://localhost:27017'; // Database Connection
const dbName = 'recipehub'; // Database Name

// set up any dataSources our resolvers need
const dataSources = () => ({
  hubAPI: new BooksApi(),
});

// Set up Apollo Server
const init = db =>
  new ApolloServer({
    dataSources: () => ({
      booksApi: new BooksApi(db.collection('books')),
      usersApi: new UsersApi(db.collection('users')),
    }),
    resolvers,
    typeDefs,
  });

// Use connect method to connect to the server
MongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  assert.equal(null, err);
  const db = client.db(dbName);
  console.log(`🥭Mongo initiated database ${dbName} at ${dbUrl}`);

  const server = init(db);

  // Start our server if we're not in a test env.
  // if we're in a test env, we'll manually start it in a test
  if (process.env.NODE_ENV !== 'test')
    server.listen({ port: 4000 }).then(({ url }) => console.log(`☕Server running at ${url}`));
});

// export all the important pieces for integration/e2e tests to use
export = {
  ApolloServer,
  BooksApi,
  dataSources,
  resolvers,
  typeDefs,
};
