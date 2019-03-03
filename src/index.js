// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Functionality
import * as utils from './utils.js';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal';
import App from './components/App/App';

ReactDOM.render(
  <ThemeProvider theme={theme.recipeHub}>
    <ModalProvider>
      <App book={utils.getData()} /> 
    </ModalProvider>
  </ThemeProvider>,
  document.getElementById('root')
);
