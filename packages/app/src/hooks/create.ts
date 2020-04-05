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

export const CREATE_RECIPE = gql`
  mutation CreateRecipe($bookId: String!) {
    createRecipe(bookId: $bookId) {
      _id
      meta {
        name
      }
      recipes {
        id
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
      }
    }
  }
`;
