import React from 'react';

import Heading from '../Heading/Heading';

const ErrorPage = (): JSX.Element => (
  <div>
    <Heading as="h2">404: Not Found</Heading>
    <p>Uh oh! Looks like this cookie jar has gone missing.</p>
  </div>
);

export default ErrorPage;
