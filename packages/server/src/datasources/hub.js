const { MongoDataSource } = require('apollo-datasource-mongodb');

class HubApi extends MongoDataSource {
  getBook(bookId) {
    return this.findOneById(bookId);
  }
}

module.exports = HubApi;
