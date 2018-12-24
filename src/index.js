// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Functionality
import * as utils from './utils.js';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';

ReactDOM.render(
  <ThemeProvider theme={theme.recipeHub}>
    <App book={utils.getData()} />
  </ThemeProvider>,
  document.getElementById('root')
);
