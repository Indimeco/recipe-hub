import { gql } from 'apollo-boost';

export const EDIT_BOOKNAME = gql`
  mutation EditBookName($userId: String!, $bookId: String!, $newBookName: String!) {
    editBookName(userId: $userId, bookId: $bookId, newBookName: $newBookName) {
      _id
      name
    }
  }
`;

export const EDIT_RECIPE = gql`
  mutation EditRecipe($recipeFragment: UpdateRecipe!) {
    editRecipe(recipeFragment: $recipeFragment) {
      _id
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
      lastModified
    }
  }
`;
