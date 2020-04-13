import { gql } from 'apollo-server-lambda';

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
    id: ID!
    name: String!
    ingredients: [Ingredient]
    directions: String
    waitingTime: Int
    activeTime: Int
    previewImage: String
    recipeSource: String
    method: String
    categories: [String]
    lastModified: String!
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
    books: [ListedBook!]
  }

  type ListedBook {
    _id: ID!
    meta: Meta!
  }

  type Query {
    book(bookId: String): Book
    user(userId: String): User
  }

  type Mutation {
    createRecipe(bookId: String!): Book
    editRecipe(recipeFragment: UpdateRecipe): Book
    createBook(userId: String!, bookName: String!): User
    editBookName(userId: String!, bookId: String!, newBookName: String!): User
  }
`;
