import React from 'react';
import styled from 'styled-components';
import componentStyle from './Footer.style';
import withColor from '../../hocs/withColor';

class Footer extends React.Component {
  render() {
    const { className, color, ...restProps } = this.props;
    return (
      <div id="footer" className={className}>
        <p>Footer text</p>
      </div>
    );
  }
}

export default withColor(
  styled(Footer)`
    ${componentStyle}
  `
);
