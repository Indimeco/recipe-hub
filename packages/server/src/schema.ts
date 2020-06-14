import { gql } from 'apollo-server-lambda';

export default gql`
  scalar Date

  type Book {
    _id: ID!
    owner: ID!
    name: String!
    views: Int!
    favorites: Int!
    recipes: [Recipe!]!
  }

  type Recipe {
    _id: ID!
    name: String!
    ingredients: [Ingredient]
    directions: String
    waitingTime: Int
    activeTime: Int
    previewImage: String
    recipeSource: String
    methods: [String]
    categories: [String]
    lastModified: Date!
  }

  type Ingredient {
    name: String!
    quantity: String
    unit: String
  }

  input UpdateRecipe {
    bookId: ID!
    _id: String!
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
    books: [Book]!
  }

  type Query {
    book(bookId: String): Book
    user(userId: String): User
  }

  type Mutation {
    createRecipe(bookId: String!): Book
    editRecipe(recipeFragment: UpdateRecipe): Book
    createBook(userId: String!, bookName: String!): User
    editBookName(userId: String!, bookId: String!, newBookName: String!): Book
  }
`;
