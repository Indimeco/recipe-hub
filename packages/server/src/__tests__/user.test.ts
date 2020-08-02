import { MongoClient, Db, ObjectId } from 'mongodb';

import { createUser } from '../mutations/createUser';

import { startDbConnection, getTestDb, closeDbConnection } from './test-utils/mongodb';
import { createTestServer } from './test-utils/graphqlServer';

describe('users', () => {
  let connection: MongoClient;
  let db: Db;

  beforeAll(async () => {
    connection = await startDbConnection();
    db = await getTestDb(connection);
  });

  afterAll(async () => {
    closeDbConnection(connection);
  });

  it('should create a user', async () => {
    const response = await createUser({ db, userName: 'Fuusen' });

    expect(response).toBeInstanceOf(ObjectId);
  });

  it('should be able to use the api to create a user', async () => {
    const { mutate } = await createTestServer(db);

    const res = await mutate({
      mutation: `
        mutation TestCreateUser($userName: String!) {
            createUser(userName: $userName) {
                username
            }
        }
        `,
      variables: { userName: 'Fuusen' },
    });

    expect(res?.data?.createUser.username).toStrictEqual('Fuusen');
  });
});
