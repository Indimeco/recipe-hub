import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import withColor from '../../hocs/withColor';

import componentStyle from './ErrorPage';

class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Heading as="h2">404: Not Found</Heading>
        <p>Uh oh! Looks like this cookie jar has gone missing.</p>
      </div>
    );
  }
}

export default withColor(
  styled(ErrorPage)`
    ${componentStyle}
  `,
);
