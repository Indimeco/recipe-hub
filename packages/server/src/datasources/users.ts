import { MongoDataSource } from 'apollo-datasource-mongodb';

import { User } from '../../../../types';

export class UsersApi extends MongoDataSource {
  async getUser(userId: string): Promise<User> {
    return this.findOneById(userId);
  }
}
