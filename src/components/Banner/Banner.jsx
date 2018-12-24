import React from 'react';
import styled from 'styled-components';
import componentStyle from './Banner.style';
import Heading from '../Heading/Heading';

class Banner extends React.Component {
  render() {
    const { className, el, children, isDefault, ...restProps } = this.props;
    return (
      <div
        className={`${className} banner ${isDefault ? 'default' : ''}`}
        {...restProps}
      >
        <Heading el={el}>{children}</Heading>
      </div>
    );
  }
}

export default styled(Banner)`
  ${componentStyle}
`;
