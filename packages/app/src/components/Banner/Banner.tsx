import React from 'react';

import Heading from '../Heading/Heading';
import Link from '../Link/Link';

import { BannerWrapper, BannerContent, Logo } from './Banner.style';

const Banner: React.FunctionComponent = ({ children }) => (
  <BannerWrapper>
    <BannerContent>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/">
        <Heading el="h1">{children}</Heading>
      </Link>
    </BannerContent>
  </BannerWrapper>
);

export default Banner;
