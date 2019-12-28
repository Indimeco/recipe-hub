import React from 'react';
import { render as reactRender, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { MockedProvider } from '@apollo/react-testing';

import { theme } from '../../styles/theme';
/* eslint-disable react/jsx-props-no-spreading */
export const render = (Component: React.FC, rest: any): RenderResult =>
  reactRender(
    <MockedProvider>
      <ThemeProvider theme={theme}>
        <Component {...rest} />
      </ThemeProvider>
    </MockedProvider>,
  );
