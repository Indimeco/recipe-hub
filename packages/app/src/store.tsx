import React, { createContext, useReducer, useContext, ReactChildren, ReactElement } from 'react';

import { StoreAction, Store } from '../types';

const initialState = {} as Store;
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: { children: ReactChildren }): ReactElement => {
  const [state, dispatch] = useReducer((currentState: any, action: StoreAction): any => {
    switch (action.type) {
      case 'activeBook':
        console.log('active book called with', action.payload);
        return { activeBook: action.payload };
      default:
        throw new Error();
    }
  }, initialState);

  return <Provider value={{ dispatch, state }}>{children}</Provider>;
};

const useGlobalState = (): Store => useContext(store);

export { StateProvider, useGlobalState };
