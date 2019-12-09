import React from 'react';
import { render as reactRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '../../styles/theme';

export const render = (Component, props) =>
  reactRender(
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>,
  );
