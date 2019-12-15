const { gql } = require('apollo-server');

const typeDefs = gql`
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
    category: [String]
  }

  type Ingredient {
    name: String!
    quantity: Float
    unit: String
  }

  type Query {
    # books: [Book]!
    book(bookId: String): Book
  }
`;

module.exports = typeDefs;
