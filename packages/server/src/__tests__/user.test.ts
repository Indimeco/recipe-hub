import { MongoClient, Db, ObjectId } from 'mongodb';

import { createUser } from '../mutations/createUser';

import { startDbConnection, getTestDb, closeDbConnection } from './utils/mongodb';
import { createTestServer } from './utils/graphqlServer';
import { GRAPHQL_CREATE_USER, GRAPHQL_CREATE_BOOK } from './graphql';

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

    const user = await mutate(GRAPHQL_CREATE_USER({ userName: 'Fuusen' }));

    expect(user?.data?.createUser.username).toStrictEqual('Fuusen');
  });

  it('should be able to use the api to add a book to user', async () => {
    const { mutate } = await createTestServer(db);

    const user = await mutate(GRAPHQL_CREATE_USER({ userName: 'Fuusen' }));
    const id = user?.data?.createUser._id;

    const withBook = await mutate(GRAPHQL_CREATE_BOOK({ userId: id, bookName: 'Efishinet Cookery' }));

    expect(withBook?.data?.createBook.username).toStrictEqual('Fuusen');
    expect(withBook?.data?.createBook.books).toHaveLength(1);
    expect(withBook?.data?.createBook.books[0].name).toStrictEqual('Efishinet Cookery');
  });
});
