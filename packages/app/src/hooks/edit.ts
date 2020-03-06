import { gql } from 'apollo-boost';

export const EDIT_BOOKNAME = gql`
  mutation EditBookName($bookId: String!, $newName: String!) {
    editBookName(bookId: $bookId) {
      id
      meta {
        name
      }
    }
  }
`;
