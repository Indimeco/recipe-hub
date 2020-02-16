import { MongoDataSource } from 'apollo-datasource-mongodb';

import { User } from '../../generated/graphql';

export class UsersApi extends MongoDataSource {
  async getUser(userId: string): Promise<User> {
    return this.findOneById(userId);
  }
}
