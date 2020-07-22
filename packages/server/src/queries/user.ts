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
    ? { _id: { $in: user.books.map((id) => oId(id)) }, name: { $gt: lastBook } }
    : { _id: { $in: user.books.map((id) => oId(id)) } };

  const userBooks = await db
    .collection(booksCollection)
    .find(query, { projection: { _id: true, name: true, favorites: true, views: true, lastModified: true } })
    .collation({ locale: 'en' }) // case insensitive search
    .sort({ name: 1 })
    .limit(pageSize);

  const count = await userBooks.count();
  const books = await userBooks.toArray();

  const pagination = {
    last: books[books.length - 1].name,
    hasNext: count > pageSize,
  };

  return {
    ...user,
    books,
    pagination,
  };
};
