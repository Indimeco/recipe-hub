import { gql } from 'apollo-boost';

export const EDIT_BOOKNAME = gql`
  mutation EditBookName($userId: String!, $bookId: String!, $newBookName: String!) {
    editBookName(userId: $userId, bookId: $bookId, newBookName: $newBookName) {
      _id
      books {
        _id
        meta {
          name
        }
      }
    }
  }
`;
