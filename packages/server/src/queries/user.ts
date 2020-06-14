import { Db } from 'mongodb';

import { User } from '../types/generated/graphql';
import { booksCollection, usersCollection } from '../config';
import { oId } from '../utils/oId';

export const resolveUser = async ({ db, userId }: { db: Db; userId: string }): Promise<User> => {
  const user = await db.collection(usersCollection).findOne({ _id: oId(userId) });
  const userBooks = await db
    .collection(booksCollection)
    .find({ _id: { $in: user.books.map((id) => oId(id)) } })
    .toArray();

  user.books = userBooks;
  return user;
};
