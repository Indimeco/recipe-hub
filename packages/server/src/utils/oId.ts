import { ObjectId } from 'mongodb';

export const oId = (id?: string | ObjectId): ObjectId => {
  if (typeof id === 'string') return new ObjectId(id);
  if (id instanceof ObjectId) return id;
  throw new Error(`Invalid id supplied to oId utility. Expected one of string of ObjectId, received: ${typeof id}`);
};
