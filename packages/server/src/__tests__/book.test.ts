import { MongoClient, Db } from 'mongodb';

import { startDbConnection, getTestDb, closeDbConnection } from './utils/mongodb';
import { createTestServer } from './utils/graphqlServer';
import { GRAPHQL_CREATE_USER, GRAPHQL_CREATE_BOOK, GRAPHQL_EDIT_BOOKNAME, GRAPHQL_CREATE_RECIPE } from './graphql';

describe('books', () => {
  let connection: MongoClient;
  let db: Db;

  beforeAll(async () => {
    connection = await startDbConnection();
    db = await getTestDb(connection);
  });

  afterAll(async () => {
    closeDbConnection(connection);
  });

  it('should be able to edit book name', async () => {
    const { mutate } = await createTestServer(db);
    const user = await mutate(GRAPHQL_CREATE_USER({ userName: 'Fuusen' }));
    const userId = user?.data?.createUser._id;
    expect(userId).toBeTruthy();

    const withBook = await mutate(GRAPHQL_CREATE_BOOK({ userId, bookName: 'Efishinet Cookery' }));
    const withBookId = withBook?.data?.createBook.books[0]._id;
    expect(withBookId).toBeTruthy();

    const newBook = await mutate(GRAPHQL_EDIT_BOOKNAME({ bookId: withBookId, newBookName: 'Potato', userId }));
    const newBookId = newBook?.data?.editBookName._id;

    expect(newBookId).toStrictEqual(withBookId);
    expect(newBook?.data?.editBookName.name).toStrictEqual('Potato');
  });

  it('should be able to add recipe', async () => {
    const { mutate } = await createTestServer(db);
    const user = await mutate(GRAPHQL_CREATE_USER({ userName: 'Fuusen' }));
    const userId = user?.data?.createUser._id;
    expect(userId).toBeTruthy();

    const withBook = await mutate(GRAPHQL_CREATE_BOOK({ userId, bookName: 'Efishinet Cookery' }));
    const withBookId = withBook?.data?.createBook.books[0]._id;
    expect(withBookId).toBeTruthy();

    const addedRecipe = await mutate(GRAPHQL_CREATE_RECIPE({ bookId: withBookId }));
    expect(addedRecipe?.data?.createRecipe._id).toStrictEqual(withBookId);
    expect(addedRecipe?.data?.createRecipe.recipes).toHaveLength(1);
  });
});
