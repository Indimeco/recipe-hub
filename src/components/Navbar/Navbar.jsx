import React from 'react';
import styled from 'styled-components';
import componentStyle from './Navbar.style';

class Navbar extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    return (
      <a className={className} href="#">
        Login
      </a>
    );
  }
}

export default styled(Navbar)`
  ${componentStyle}
`;
