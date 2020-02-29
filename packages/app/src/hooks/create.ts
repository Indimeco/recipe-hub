import { gql } from 'apollo-boost';

export const CREATE_BOOK = gql`
  mutation CreateBook($userId: String!, $bookName: String!) {
    createBook(userId: $userId, bookName: $bookName) {
      _id
      username
      books {
        _id
        meta {
          name
          favorites
          views
        }
      }
    }
  }
`;
