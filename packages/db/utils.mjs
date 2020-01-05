import book from './sampleDocuments/book.mjs';
import user from './sampleDocuments/user.mjs';

export const insertBooks = (db, number) => {
  const collection = db.collection('books');
  const generatedBooks = [...Array(number)].map((_, index) => {
    const newBook = JSON.parse(JSON.stringify(book));
    newBook._id = `${index}`;
    newBook.meta.name += index;
    return newBook;
  });

  return collection.insertMany(generatedBooks);
};

export const insertUser = (db, number) => {
  const collection = db.collection('users');
  const generatedUsers = [...Array(number)].map((_, index) => {
    const newUser = JSON.parse(JSON.stringify(user));
    newUser._id = `${index}`;
    newUser.username += index;

    if (index !== 0) {
      newUser.books = [{ _id: '1', name: "Jake's Recipes0", favorites: '0', views: '100' }];
    }

    return newUser;
  });

  return collection.insertMany(generatedUsers);
};
