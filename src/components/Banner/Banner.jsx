import React from 'react';
import styled from 'styled-components';
import componentStyle from './Banner.style';
import Heading from '../Heading/Heading';
import withColor from '../../hocs/withColor';

class Banner extends React.Component {
  render() {
    const {
      className,
      subTheme,
      el,
      children,
      isDefault,
      ...restProps
    } = this.props;
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

export default styled(withColor(Banner))`
  ${componentStyle}
`;
