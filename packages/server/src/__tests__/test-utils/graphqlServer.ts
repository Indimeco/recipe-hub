import { createTestClient, ApolloServerTestClient } from 'apollo-server-testing';
import { ApolloServerBase } from 'apollo-server-core';
import { Db } from 'mongodb';

import typeDefs from '../../schema';
import resolvers from '../../resolvers';

export const createTestServer = async (database: Db): Promise<ApolloServerTestClient> => {
  const server = await new ApolloServerBase({
    resolvers,
    context: () => {
      return {
        headers: null,
        event: null,
        db: database,
      };
    },
    typeDefs,
  });

  return createTestClient(server);
};
