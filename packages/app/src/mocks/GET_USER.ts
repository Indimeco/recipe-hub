export default {
  data: {
    user: {
      _id: '746573747573657269644030',
      username: 'TestUser0',
      books: [
        {
          _id: '74657374626f6f6b69644030',
          name: 'Fuusen',
          favorites: 0,
          views: 100,
          lastModified: '1576221430538',
        },
        {
          _id: '5e5cc970fa637929e872dea3',
          name: '21032 Potato Recipes',
          favorites: 0,
          views: 0,
          lastModified: '1576221430539',
        },
      ],
      pagination: {
        last: '21032 Potato Recipes',
        hasNext: false,
        __typename: 'Pagination',
      },
      __typename: 'User',
    },
  },
};
