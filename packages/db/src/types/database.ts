import { ObjectId } from 'mongodb';

import { Book, User, Recipe } from './generated/graphql';

interface DbRecipe extends Omit<Recipe, '_id'> {
  _id: ObjectId;
}

export interface BookDocument extends Omit<Book, '_id' | 'owner' | 'recipes'> {
  _id: ObjectId;
  owner: ObjectId;
  recipes: DbRecipe[];
}
export interface UserDocument extends Omit<User, '_id' | 'books'> {
  _id: ObjectId;
  books: ObjectId[];
}
