import React from 'react';
import styled from 'styled-components';
import componentStyle from './Navbar.style';

import Banner from '../Banner/Banner';

class Navbar extends React.Component {
  render() {
    const { className, subTheme, banner, ...restProps } = this.props;
    return (
      <div className={className}>
        <div className="nav">
          {banner}
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
