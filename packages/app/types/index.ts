import { Book } from '../../../types';

export type StoreAction = {
  type: string;
  payload: { [x: string]: any };
};

export type State = {
  activeBook: Book;
};

export type Store = {
  dispatch: React.Dispatch<any>;
  state: State;
};
