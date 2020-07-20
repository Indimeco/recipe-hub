import mongo, { ObjectId } from 'mongodb';
import { clone } from 'ramda';
import faker from 'faker';

import { DB_COLLECTION_BOOKS, DB_COLLECTION_USERS } from './config';
import { SampleUser } from './sampleDocuments';
import { BookDocument } from './types';

type insertBooksProps = {
  db: mongo.Db;
  quantity: number;
  owner?: ObjectId;
};
export const insertBooks = ({ db, quantity, owner }: insertBooksProps): ObjectId[] => {
  const collection = db.collection(DB_COLLECTION_BOOKS);
  const generatedIds = [...Array(quantity)].map(() => new ObjectId());

  const generatedBooks = [...Array(quantity)].map((_, index) => {
    const newBook: BookDocument = {
      _id: generatedIds[index],
      owner: owner ?? new ObjectId(),
      favorites: faker.random.number(40000),
      views: faker.random.number(99999999),
      name: faker.random.words(),
      recipes: [...Array(faker.random.number(35))].map((recipe) => ({
        ...recipe,
        name: faker.random.words(),
        directions: faker.lorem.paragraphs(),
        ingredients: [...Array(faker.random.number(30))].map(() => ({
          name: faker.random.word(),
          quantity: faker.random.number(30).toString(),
          unit: faker.random.word(),
        })),
        previewImage: faker.image.imageUrl(),
        activeTime: faker.random.number(),
        waitingTime: faker.random.number(),
        methods: [...Array(faker.random.number(20))].map(() => faker.random.word()),
        categories: [...Array(faker.random.number(20))].map(() => faker.random.word()),
        _id: new ObjectId(),
        lastModified: faker.date.past(),
      })),
    };
    return newBook;
  });

  collection.insertMany(generatedBooks);
  return generatedIds;
};

type insertUserProps = {
  db: mongo.Db;
  quantity: number;
  bookIds?: ObjectId[];
};
export const insertUsers = ({ db, quantity, bookIds }: insertUserProps) => {
  const collection = db.collection(DB_COLLECTION_USERS);
  const generatedIds: ObjectId[] = [...Array(quantity)].map(() => new ObjectId());

  const generatedUsers = [...Array(quantity)].map((_, index) => {
    const newUser = clone(SampleUser);
    newUser._id = generatedIds[index];
    newUser.username = faker.hacker.noun();

    newUser.books = bookIds ?? [new ObjectId()];

    return newUser;
  });

  collection.insertMany(generatedUsers);

  return generatedIds;
};
