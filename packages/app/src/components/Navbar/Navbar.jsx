import React from 'react';
import styled from 'styled-components';

import withColor from '../../hocs/withColor';

import componentStyle from './Navbar.style';

class Navbar extends React.Component {
  render() {
    const { className, color, banner, ...restProps } = this.props;
    return (
      <div color={color} className={className}>
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

export default withColor(
  styled(Navbar)`
    ${componentStyle}
  `,
);
