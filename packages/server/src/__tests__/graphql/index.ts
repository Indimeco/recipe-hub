export const GRAPHQL_CREATE_USER = ({ userName }: { userName: string }) => ({
  mutation: `
    mutation TestCreateUser($userName: String!) {
        createUser(userName: $userName) {
            username
            _id
        }
    }
    `,
  variables: { userName },
});

export const GRAPHQL_CREATE_BOOK = ({ userId, bookName }: { userId: string; bookName: string }) => ({
  mutation: `
    mutation TestCreateBook($userId: String!, $bookName: String!) {
        createBook(userId: $userId, bookName: $bookName) {
          _id
          username
          books {
            _id
            name
          }
        }
    }
    `,
  variables: { userId, bookName },
});

export const GRAPHQL_EDIT_BOOKNAME = ({
  bookId,
  newBookName,
  userId,
}: {
  bookId: string;
  newBookName: string;
  userId: string;
}) => ({
  mutation: `
    mutation EditBookName($userId: String!, $bookId: String!, $newBookName: String!) {
      editBookName(userId: $userId, bookId: $bookId, newBookName: $newBookName) {
        _id
        name
      }
    }
    `,
  variables: { bookId, newBookName, userId },
});

export const GRAPHQL_CREATE_RECIPE = ({ bookId }: { bookId: string }) => ({
  mutation: `
      mutation TestCreateRecipe($bookId: String!) {
          createRecipe(bookId: $bookId) {
              name
              _id
              recipes {
                _id
              }
          }
      }
      `,
  variables: { bookId },
});
