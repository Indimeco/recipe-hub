import { gql } from 'apollo-boost';

export const GET_BOOK = gql`
  query Book($bookId: String!) {
    book(bookId: $bookId) {
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

export const GET_RECIPE = gql`
  query Book($bookId: String!, $recipeId: String!) {
    book(bookId: $bookId) {
      meta {
        name
      }
      recipes(recipeId: $recipeId) {
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
