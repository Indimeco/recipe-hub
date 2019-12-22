// TODO https://github.com/dotansimha/graphql-code-generator / https://www.formidable.com/blog/2019/strong-typing/

type Book = {
  [x: string]: any;
};

export type StoreAction = {
  type: string;
  payload: { [x: string]: any };
};

export type State = {
  activeBook: Book;
};

export type Store = {
  dispatch: React.Dispatch;
  state: any;
};
