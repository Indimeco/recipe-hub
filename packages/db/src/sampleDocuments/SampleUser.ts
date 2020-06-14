import { ObjectId } from 'mongodb';

import { UserDocument } from '../types';

export const SampleUser: UserDocument = {
  _id: new ObjectId('746573747573657269644030'),
  username: 'BabyBear',
  books: [new ObjectId('507f191e810c19729de860ea')],
};
