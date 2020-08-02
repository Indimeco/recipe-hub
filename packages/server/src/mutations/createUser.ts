import { Db, ObjectId } from 'mongodb';

import { usersCollection } from '../config';

type props = {
  userName: string;
  db: Db;
};
type createUserSignature = ({ userName, db }: props) => Promise<ObjectId>;

export const createUser: createUserSignature = async ({ userName, db }) => {
  try {
    const resp = await db.collection(usersCollection).insertOne({ username: userName, books: [] });
    return resp.insertedId as ObjectId;
  } catch (err) {
    throw new Error(err);
  }
};
