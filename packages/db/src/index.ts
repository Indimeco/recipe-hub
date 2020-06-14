import assert from 'assert';

import MongoClient from 'mongodb';

import { DB_URI, DB_NAME, DB_COLLECTION_BOOKS, DB_COLLECTION_USERS } from './config';
import { createBooks, createUsers } from './schema';
import { insertBooks, insertUser } from './utils';
import { SampleBook, SampleUser } from './sampleDocuments';

const resetDb = (db: MongoClient.Db) => {
  return db.dropDatabase();
};

// Main
if (!DB_URI) throw new Error('No dbUri found in environment config');
MongoClient.connect(DB_URI, { useNewUrlParser: true }, async (err, client) => {
  try {
    assert.equal(null, err);
    console.log('Connected successfully to server');

    const db = client.db(DB_NAME);

    await resetDb(db);
    await createBooks(db, DB_COLLECTION_BOOKS);
    await createUsers(db, DB_COLLECTION_USERS);

    await db.collection('books').insertOne(SampleBook);
    await insertBooks(db, 5);
    await db.collection('users').insertOne(SampleUser);
    await insertUser(db, 3);

    console.log(await db.stats());
    client.close();
  } catch (error) {
    console.log(error);
  }
});
