import React from 'react';

import Heading from '../Heading/Heading';

type Response = {
  [x: string]: {
    title: string;
    message: string;
  };
};

export const codeResponses: Response = {
  '404': {
    title: '404: Not Found',
    message: 'Uh oh! Looks like this cookie jar has gone missing.',
  },
  '403': {
    title: '403: Forbidden',
    message: `Are you sure this is your spatula?`,
  },
};

interface ErrorPageProps {
  code: string;
}

const ErrorPage = ({ code = '404' }): React.ReactElement<ErrorPageProps> => (
  <div>
    <Heading el="h2">{codeResponses[code].title}</Heading>
    <p>{codeResponses[code].message}</p>
  </div>
);

export default ErrorPage;
