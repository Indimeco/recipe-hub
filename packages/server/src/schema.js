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
    quantity: Int
    unit: String
  }

  type Query {
    books: [Book]!
    book(bookId: String): Book
  }

  # type Mutation {
  #   # if false, signup failed -- check errors
  #   bookTrips(launchIds: [ID]!): TripUpdateResponse!

  #   # if false, cancellation failed -- check errors
  #   cancelTrip(launchId: ID!): TripUpdateResponse!

  #   login(email: String): String # login token
  # }
`;

module.exports = typeDefs;
