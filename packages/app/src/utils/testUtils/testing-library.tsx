import React from 'react';
import { render as reactRender, RenderResult, RenderOptions } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { BrowserRouter as Router } from 'react-router-dom';

const AllTheProviders: React.FunctionComponent<any> = ({ children }) => {
  return (
    <MockedProvider>
      <Router>{children}</Router>
    </MockedProvider>
  );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>): RenderResult =>
  reactRender(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
