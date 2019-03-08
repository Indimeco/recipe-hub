import React from 'react';
import styled from 'styled-components';
import componentStyle from './Footer.style';

class Footer extends React.Component {
  render() {
    const { className, subTheme, ...restProps } = this.props;
    return (
      <div id="footer" className={className}>
        <p>Footer text</p>
      </div>
    );
  }
}

export default styled(Footer)`
  ${componentStyle}
`;
