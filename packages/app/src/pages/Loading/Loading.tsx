import React from 'react';

import { Spinner, LoadingArea } from './Loading.style';

export const Loading: React.FunctionComponent = () => (
  <LoadingArea>
    <Spinner />
  </LoadingArea>
);

export default Loading;
