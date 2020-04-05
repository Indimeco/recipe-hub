import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import { Link } from '../Link/Link';

import { FooterWrapper, FooterContent } from './Footer.style';

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <FooterContent>
      <ul>
        <li>
          <Link invert href="https://twitter.com/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li>

        <li>
          <Link invert href="https://facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </li>

        <li>
          <Link invert href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
      </ul>
    </FooterContent>
  </FooterWrapper>
);

export default Footer;
