import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import './index.css';
import * as serviceWorker from './serviceWorker';
import theme from './styles/theme';
import { ColorProvider } from './hocs/withColor';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Layout from './components/Layout/Layout';
import Pages from './pages';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <ColorProvider.Provider value="root">
        <ModalProvider>
          <Navbar
            color="aux"
            banner={
              <Banner color="main" el="h1">
                Recipe Hub
              </Banner>
            }
          />
          <Layout>
            <Pages />
          </Layout>
          <Footer color="aux" />
        </ModalProvider>
      </ColorProvider.Provider>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
