export interface RecipeAreaMatch {
  match: { params: { bookId: string } };
}

export interface RecipeDetailMatch {
  match: { params: { bookId: string; recipeId: string } };
}
