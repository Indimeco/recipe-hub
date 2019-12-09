const Path = require('path');
const assert = require('assert');

const Hapi = require('@hapi/hapi');
const { MongoClient } = require('mongodb');

const dbUrl = 'mongodb://localhost:27017'; // Database Connection
const dbName = 'recipehub'; // Database Name

const init = async db => {
  const server = await Hapi.server({
    port: 146,
    routes: {
      files: {
        relativeTo: Path.join(__dirname, '../dist'),
      },
    },
  });

  await server.register(require('@hapi/inert'));

  server.route([
    {
      method: '*',
      path: '/{p*}',
      handler: {
        file: 'index.html',
      },
    },
    {
      method: 'GET',
      path: '/assets/bundle.js',
      handler: {
        file: 'bundle.js',
      },
    },
    {
      method: 'GET',
      path: '/api/books/{name}',
      async handler(request) {
        const collection = db.collection('books');
        const book = await collection.findOne({ _id: request.params.name });
        return book;
      },
    },

    {
      method: 'PUT',
      path: '/api/books/{name}/{recipe}',
      async handler(request) {
        const recipeKey = request.query.key;
        const recipeValue = request.payload;

        if (recipeKey && recipeValue) {
          const collection = db.collection('books');
          await collection.findOneAndUpdate(
            { _id: request.params.name, 'recipes.id': request.params.recipe },
            { $set: { [`recipes.$.${recipeKey}`]: recipeValue } },
          );

          // TODO: What to return?
          return 'OK';
        }
      },
    },
  ]);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
  console.log('Encountered an unhandled rejection: ');
  console.log(err);
  process.exit(1);
});

// Use connect method to connect to the server
MongoClient.connect(dbUrl, { useNewUrlParser: true }, async function(err, client) {
  assert.equal(null, err);
  const db = client.db(dbName);
  console.log(`Mongo initiated database ${dbName} at ${dbUrl}`);

  init(db);
});
