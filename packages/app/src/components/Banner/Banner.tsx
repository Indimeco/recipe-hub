import React from 'react';

import Heading from '../Heading/Heading';

import { BannerWrapper, BannerContent } from './Banner.style';

const Banner: React.FunctionComponent = ({ children }) => (
  <BannerWrapper>
    <BannerContent>
      <Heading el="h1">{children}</Heading>
    </BannerContent>
  </BannerWrapper>
);

export default Banner;
