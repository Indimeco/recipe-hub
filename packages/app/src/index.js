import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './index.css';
import App from './App';
import { StateProvider } from './store';
import * as serviceWorker from './serviceWorker';
import theme from './styles/theme';
import { ColorProvider } from './hocs/withColor';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <StateProvider>
        <ColorProvider.Provider value="root">
          <ModalProvider>
            <App bookId="1" />
          </ModalProvider>
        </ColorProvider.Provider>
      </StateProvider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
