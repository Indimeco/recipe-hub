'use strict';

const Hapi = require('@hapi/hapi');
const Path = require('path');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const dbUrl = 'mongodb://localhost:27017'; // Database Connection
const dbName = 'recipehub'; // Database Name

const init = async db => {
	const server = await Hapi.server({
		port: 146,
		routes: {
			files: {
				relativeTo: Path.join(__dirname, '../dist')
			}
		}
	});

	await server.register(require('@hapi/inert'));

	server.route([
		{
			method: '*',
			path: '/{p*}',
			handler: {
				file: 'index.html'
			}
		},
		{
			method: 'GET',
			path: '/assets/bundle.js',
			handler: {
				file: 'bundle.js'
			}
		},
		{
			method: 'GET',
			path: '/api/books/{name}',
			handler: async function (request) {
				const collection = db.collection('books');
				const book = await collection.findOne({ _id: request.params.name });
				return book;
			}
		}
	]);

	await server.start();
	console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
	console.log('Encountered an unhandled rejectection: ');
	console.log(err);
	process.exit(1);
});

// Use connect method to connect to the server
MongoClient.connect(dbUrl, { useNewUrlParser: true }, async function (
	err,
	client
) {
	assert.equal(null, err);
	const db = client.db(dbName);
	console.log(`Mongo initiated database ${dbName} at ${dbUrl}`);

	init(db);
});
