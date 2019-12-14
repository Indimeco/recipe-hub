module.exports = {
  Query: {
    book: async (_source, { bookId }, { dataSources }) => {
      return dataSources.hubApi.getBook(bookId);
    },
  },
};
