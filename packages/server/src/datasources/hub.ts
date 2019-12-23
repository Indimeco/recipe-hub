import { MongoDataSource } from 'apollo-datasource-mongodb';

export class HubApi extends MongoDataSource {
  getBook(bookId: string): any {
    return this.findOneById(bookId);
  }
}
