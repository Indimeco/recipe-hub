import { gql } from 'apollo-server';

export default gql`
  type Book {
    _id: ID!
    meta: Meta!
    recipes: [Recipe]
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
    waitingTime: Int
    activeTime: Int
    previewImage: String
    recipeSource: String
    method: String
    categories: [String]
  }

  type Ingredient {
    name: String!
    quantity: String!
    unit: String!
  }

  input UpdateRecipe {
    bookId: ID!
    id: String!
    name: String
    ingredients: [UpdateIngredient]
    directions: String
    waitingTime: Int
    activeTime: Int
    previewImage: String
    recipeSource: String
    method: String
    categories: [String]
  }

  input UpdateIngredient {
    name: String!
    quantity: String
    unit: String
  }

  type User {
    _id: ID!
    username: String!
    books: [ListedBook]
  }

  type ListedBook {
    _id: ID!
    name: String!
    favorites: Int!
    views: Int!
  }

  type Query {
    book(bookId: String): Book
    user(userId: String): User
  }

  type Mutation {
    editRecipe(recipeFragment: UpdateRecipe): Recipe
  }
`;
