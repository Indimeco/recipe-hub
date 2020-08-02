import { Db, ObjectId } from 'mongodb';

import { usersCollection } from '../config';

type PcreateUser = {
  userName: string;
  db: Db;
};
type TcreateUser = ({ userName, db }: PcreateUser) => Promise<ObjectId>;

export const createUser: TcreateUser = async ({ userName, db }) => {
  try {
    const resp = await db.collection(usersCollection).insertOne({ username: userName, books: [] });
    return resp.insertedId as ObjectId;
  } catch (err) {
    throw new Error(err);
  }
};
