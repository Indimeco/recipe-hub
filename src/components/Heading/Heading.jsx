import React from 'react';
import styled from 'styled-components';
import componentStyle from './Heading.style';

class Header extends React.Component {
  render() {
    const { className, children, el, ...restProps } = this.props;
    const El = el;
    return <El className={`${className} heading`}>{children}</El>;
  }
}

export default styled(Header)`
  ${componentStyle}
`;
