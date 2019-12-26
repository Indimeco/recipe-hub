import { gql } from 'apollo-boost';

export const queryBook = (bookId: string): any => gql`
{
  book(bookId: "${bookId}") {
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
