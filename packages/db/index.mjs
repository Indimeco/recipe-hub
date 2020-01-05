import assert from 'assert';

import MongoClient from 'mongodb';

import { insertBooks, insertUser } from './utils.mjs';

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'recipehub';

const resetDb = db => {
  return db.dropDatabase();
};

// Main
MongoClient.connect(dbUrl, { useNewUrlParser: true }, async function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  await resetDb(db);
  await insertBooks(db, 5);
  await insertUser(db, 3);

  console.log(await db.stats());
  client.close();
});
