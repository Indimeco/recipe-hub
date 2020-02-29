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

export const GET_USERS_BOOKS = gql`
  query UserBooks($userId: String!) {
    user(userId: $userId) {
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

export const EDIT_RECIPE = gql`
  mutation EditRecipe($recipeFragment: UpdateRecipe!) {
    editRecipe(recipeFragment: $recipeFragment) {
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
      method
      categories
    }
  }
`;
