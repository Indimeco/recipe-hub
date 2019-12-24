import { MongoDataSource } from 'apollo-datasource-mongodb';

import { Book, Recipe, UpdateRecipe } from '../../../../types';

export class HubApi extends MongoDataSource {
  getBook(bookId: string): Promise<Book> {
    return this.findOneById(bookId);
  }

  async getRecipe(bookId, recipeId): Promise<Recipe> {
    const result = await this.getBook(bookId);
    return result.recipes.find(recipe => recipe.id === recipeId);
  }

  async editRecipe(recipeFragment: UpdateRecipe): Promise<Recipe> {
    const { bookId, id, ...rest } = recipeFragment;

    const updatePayload = {};
    Object.entries(rest).forEach(([key, value]) => {
      updatePayload[`recipes.$.${key}`] = value;
    });
    console.log('Update payload: ', updatePayload);

    const update = this.collection.findOneAndUpdate(
      { _id: bookId, 'recipes.id': id },
      {
        $set: updatePayload,
      },
    );
    return update.then(({ lastErrorObject: { updatedExisting } }) => {
      if (updatedExisting) {
        return this.getRecipe(bookId, id);
      }

      throw new Error('Database modifications failed');
    });
  }
}
