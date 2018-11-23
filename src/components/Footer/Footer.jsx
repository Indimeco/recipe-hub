import React from 'react';
import styled from 'styled-components';
import componentStyle from './Footer.style';

class Footer extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    return (
      <span id="footer" className={className}>
        <p>Footer text</p>
      </span>
    );
  }
}

export default styled(Footer)`
  ${componentStyle}
`;
