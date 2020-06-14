import { gql } from 'apollo-boost';

export const GET_BOOK = gql`
  query Book($bookId: String!) {
    book(bookId: $bookId) {
      _id
      name
      recipes {
        _id
        name
        ingredients {
          name
          quantity
          unit
        }
        directions
        waitingTime
        activeTime
        previewImage
        recipeSource
        lastModified
      }
    }
  }
`;

export const GET_USER = gql`
  query User($userId: String!) {
    user(userId: $userId) {
      _id
      username
      books {
        _id
        name
        favorites
        views
      }
    }
  }
`;
