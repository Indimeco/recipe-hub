import React from 'react';
import styled from 'styled-components';
import componentStyle from './Navbar.style';

import Banner from '../Banner/Banner';

class Navbar extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    return (
      <div className={className}>
        <div className="nav">
          <Banner el="h1">Recipe Hub</Banner>
          <div className="links">
            <a href="#">Login</a>
          </div>
        </div>
        <div className="navbar-spacing" />
      </div>
    );
  }
}

export default styled(Navbar)`
  ${componentStyle}
`;
