import React from 'react';
import { render as reactRender, RenderResult, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from '../../styles/theme';

const AllTheProviders: React.FunctionComponent<any> = ({ children }) => {
  return (
    <MockedProvider>
      <ThemeProvider theme={theme}>
        <Router>{children}</Router>
      </ThemeProvider>
    </MockedProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  reactRender(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
