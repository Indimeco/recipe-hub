"use strict";

const Hapi = require("@hapi/hapi");
const Path = require("path");

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017"; // Database Connection URL
const dbName = "recipehub"; // Database Name

const init = async () => {
  const server = await Hapi.server({
    port: 146,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, "../dist")
      }
    }
  });

  await server.register(require("@hapi/inert"));

  server.route([
    ({
      method: "GET",
      path: "/",
      handler: {
        file: "index.html"
      }
    },
    {
      method: "GET",
      path: "/assets/bundle.js",
      handler: {
        file: "bundle.js"
      }
    },
    {
      method: "GET",
      path: "/api/books/{name}",
      handler: function(request, reply) {
        collection.findOne({ _id: request.params.name }, function(error, book) {
          assert.equal(null, error);
          reply(book);
        });
      }
    })
  ]);

  await server.start();
  console.log("Server running on %ss", server.info.uri);
};

process.on("unhandledRejection", err => {
  console.log(err);
  process.exit(1);
});

// Use connect method to connect to the server
MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
  assert.equal(null, err);
  const db = client.db(dbName);
  const collection = db.collection("books");
  console.log("Connected successfully to server");

  init();
});
