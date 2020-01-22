import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { FooterWrapper, FooterContent } from './Footer.style';

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <FooterContent>
      <ul>
        <li>
          <a href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li>
          <a href="https://facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>

        <li>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
