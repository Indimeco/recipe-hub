import { Db } from 'mongodb';

import { User } from '../types/generated/graphql';
import { booksCollection, usersCollection } from '../config';
import { oId } from '../utils/oId';

export const resolveUser = async ({
  db,
  userId,
  lastBook,
}: {
  db: Db;
  userId: string;
  lastBook?: string;
}): Promise<User> => {
  // TODO abstract pagination to utility component
  const pageSize = 10;

  const user = await db
    .collection(usersCollection)
    .findOne({ _id: oId(userId) }, { projection: { _id: true, username: true, books: true } });

  const query = lastBook
    ? { _id: { $in: user.books.map((id) => oId(id)), $gt: oId(lastBook) } }
    : { _id: { $in: user.books.map((id) => oId(id)) } };

  const userBooks = await db
    .collection(booksCollection)
    .find(query, { projection: { _id: true, name: true, favorites: true, views: true } })
    .limit(pageSize);

  const count = await userBooks.count();

  const books = await userBooks.toArray();
  const pagination = {
    lastId: books[books.length - 1]._id,
    hasNext: count > pageSize,
  };

  return {
    ...user,
    books,
    pagination,
  };
};
