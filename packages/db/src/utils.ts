import mongo from 'mongodb';
import { clone } from 'ramda';

import { SampleBook, SampleUser } from './sampleDocuments';

const { ObjectId } = mongo;

// TODO make full use of ramda
// TODO use something like faker instead of index to improve data
export const insertBooks = (db: mongo.Db, number: number) => {
  const collection = db.collection('books');

  const generatedBooks = [...Array(number)].map((_, index) => {
    const newBook = clone(SampleBook);
    newBook._id = new ObjectId();
    newBook.name += index;
    newBook.recipes = newBook.recipes?.map((recipe: any) => ({
      ...recipe,
      _id: new ObjectId(),
      lastModified: new Date(),
    }));
    return newBook;
  });

  return collection.insertMany(generatedBooks);
};

export const insertUser = (db: mongo.Db, number: number) => {
  const collection = db.collection('users');
  const generatedUsers = [...Array(number)].map((_, index) => {
    const newUser = clone(SampleUser);
    newUser._id = new ObjectId();
    newUser.username += index;

    newUser.books = [new ObjectId()];

    return newUser;
  });

  return collection.insertMany(generatedUsers);
};
