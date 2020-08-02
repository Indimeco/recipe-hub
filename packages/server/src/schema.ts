import { gql } from 'apollo-server-lambda';

export default gql`
  scalar Date

  type Book {
    _id: ID!
    owner: ID!
    name: String!
    views: Int!
    favorites: Int!
    lastModified: Date!
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

  type Pagination {
    last: String!
    hasNext: Boolean!
  }

  type User {
    _id: ID!
    username: String!
    books: [Book]!
    pagination: Pagination!
  }

  type Query {
    book(bookId: String): Book
    user(userId: String, lastBook: String): User
  }

  type Mutation {
    createUser(userName: String!): User
    createRecipe(bookId: String!): Book
    editRecipe(recipeFragment: UpdateRecipe): Book
    createBook(userId: String!, bookName: String!): User
    editBookName(userId: String!, bookId: String!, newBookName: String!): Book
  }
`;
