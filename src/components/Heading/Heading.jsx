import React from 'react';
import styled from 'styled-components';
import componentStyle from './Heading.style';

class Header extends React.Component {
  render() {
    const { el: El, subTheme, ...restProps } = this.props;
    return <El {...restProps} />;
  }
}

export default styled(Header)`
  ${componentStyle}
`;
