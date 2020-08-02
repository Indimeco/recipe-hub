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
                username
                books {
                    name
                }
            }
        }
        `,
  variables: { userId, bookName },
});
