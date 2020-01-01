import { gql } from 'apollo-server';

export default gql`
  type Book {
    _id: ID!
    meta: Meta!
    recipes: [Recipe!]
  }

  type Meta {
    name: String!
    favorites: Int!
    views: Int!
  }

  type Recipe {
    id: String!
    name: String!
    ingredients: [Ingredient]
    directions: String
    waitingTime: Int!
    activeTime: Int!
    previewImage: String
    recipeSource: String
    method: String
    categories: [String]
  }

  type Ingredient {
    name: String!
    quantity: Float
    unit: String
  }

  input UpdateRecipe {
    bookId: ID!
    id: String!
    name: String!
    ingredients: [UpdateIngredient]
    directions: String
    waitingTime: Int!
    activeTime: Int!
    previewImage: String
    recipeSource: String
    method: String
    categories: [String]
  }

  input UpdateIngredient {
    name: String!
    quantity: Float
    unit: String
  }

  type Query {
    # books: [Book]!
    book(bookId: String): Book
  }

  type Mutation {
    editRecipe(recipeFragment: UpdateRecipe): Recipe
  }
`;
