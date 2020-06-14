import { ObjectId } from 'mongodb';

export const oId = (id?: string): ObjectId => new ObjectId(id);
