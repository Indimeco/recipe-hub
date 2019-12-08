import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

import withColor from '../../hocs/withColor';

import { footerStyle, spacingStyle } from './Footer.style';

const StickyBar = styled.div`
  ${footerStyle}
`;

const Spacing = styled.div`
  ${spacingStyle}
`;

class Footer extends React.Component {
  render() {
    const { color } = this.props;
    return (
      <div>
        <Spacing />
        <StickyBar color={color} id="footer">
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
        </StickyBar>
      </div>
    );
  }
}

Footer.propTypes = {
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

export default withColor(Footer);
