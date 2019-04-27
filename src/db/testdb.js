const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const utils = require("./utils");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "recipehub";

const insertBook = function(db, callback) {
  // Get the documents collection
  const collection = db.collection("books");
  // Insert some documents
  collection.insertOne(utils.getData(), function(err, result) {
    assert.equal(err, null);
    console.log("Inserted documents into the collection");
    callback(result);
  });
};

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertBook(db, function() {
    client.close();
  });
});
