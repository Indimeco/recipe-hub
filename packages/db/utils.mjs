import mongo from 'mongodb';

import book from './sampleDocuments/book.mjs';
import user from './sampleDocuments/user.mjs';

const { ObjectID } = mongo;

export const insertBooks = (db, number) => {
  const collection = db.collection('books');
  const generatedBooks = [...Array(number)].map((_, index) => {
    const newBook = JSON.parse(JSON.stringify(book));
    newBook._id = new ObjectID(`testbookid@${index}`);
    newBook.meta.name += index;
    return newBook;
  });

  return collection.insertMany(generatedBooks);
};

export const insertUser = (db, number) => {
  const collection = db.collection('users');
  const generatedUsers = [...Array(number)].map((_, index) => {
    const newUser = JSON.parse(JSON.stringify(user));
    newUser._id = new ObjectID(`testuserid@${index}`);
    newUser.username += index;

    newUser.books = [
      { _id: new ObjectID(`testbookid@${index}`), meta: { name: "Jake's Recipes0", favorites: '0', views: '100' } },
    ];

    return newUser;
  });

  return collection.insertMany(generatedUsers);
};
