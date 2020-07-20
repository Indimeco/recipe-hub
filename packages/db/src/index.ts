import assert from 'assert';

import MongoClient from 'mongodb';

import { DB_URI, DB_NAME, DB_COLLECTION_BOOKS, DB_COLLECTION_USERS } from './config';
import { createBooks, createUsers } from './schema';
import { insertBooks, insertUsers } from './utils';
import { SampleBook, SampleUser } from './sampleDocuments';

const NUM_BOOKS = 15;
const NUM_USERS = 3;

const resetDb = (db: MongoClient.Db) => {
  return db.dropDatabase();
};

// Main
if (!DB_URI) throw new Error('No dbUri found in environment config');
MongoClient.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
  try {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(DB_NAME);

    await resetDb(db);
    await createBooks(db, DB_COLLECTION_BOOKS);
    await createUsers(db, DB_COLLECTION_USERS);

    // Insert the book devoted to integration tests
    await db.collection(DB_COLLECTION_BOOKS).insertOne(SampleBook);
    // Insert other books
    assert(NUM_BOOKS > 10); // pagination tests require lots of books
    const generatedIds = await insertBooks({ db, quantity: NUM_BOOKS, owner: SampleUser._id });

    // Insert the user devoted to integration tests
    await db
      .collection(DB_COLLECTION_USERS)
      .insertOne({ ...SampleUser, books: [...SampleUser.books, ...generatedIds] });
    // Insert other users
    await insertUsers({ db, quantity: NUM_USERS });

    // Log data
    console.log(await db.stats());
    client.close();
  } catch (error) {
    console.log(error);
  }
});
