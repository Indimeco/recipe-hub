const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const utils = require('./utils');

const dbUrl = 'mongodb://localhost:27017';
const dbName = 'recipehub';

const insertBook = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('books');
  // Insert some documents
  return collection.insertOne(utils.getData());
};

const resetDb = (db, callback) => {
  db.dropDatabase();
  console.log('Dropped the database! Whoopsey~');
};

// Main
MongoClient.connect(dbUrl, { useNewUrlParser: true }, async function(
  err,
  client
) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);

  await resetDb(db);
  await insertBook(db);

  console.log(await db.stats());
  console.log(await db.collection('books').stats());
  client.close();
});
