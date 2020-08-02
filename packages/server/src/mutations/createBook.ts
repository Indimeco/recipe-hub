import { Db, ObjectId } from 'mongodb';

import { booksCollection, usersCollection } from '../config';

type props = {
  userId: ObjectId;
  newBook: newBook;
  db: Db;
};

type newBook = {
  name: string;
  favorites: number;
  views: number;
  recipes: never[];
  owner: ObjectId;
  lastModified: Date;
};

type createBookSignature = ({ userId, newBook, db }: props) => Promise<boolean>;

export const createBook: createBookSignature = async ({ userId, newBook, db }) => {
  try {
    const res = await db.collection(booksCollection).insertOne(newBook);
    const generatedId = res.insertedId;

    await db.collection(usersCollection).updateOne(
      { _id: userId },
      {
        $push: { books: generatedId },
      },
    );
    return true;
  } catch (err) {
    throw new Error(err);
  }
};
