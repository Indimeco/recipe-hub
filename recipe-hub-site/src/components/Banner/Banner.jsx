import React from 'react';
import styled from 'styled-components';

import Heading from '../Heading/Heading';
import withColor from '../../hocs/withColor';

import componentStyle from './Banner.style';

class Banner extends React.Component {
  render() {
    const { className, color, el, children, isDefault, ...restProps } = this.props;
    return (
      <div className={`${className} banner ${isDefault ? 'default' : ''}`} {...restProps}>
        <Heading el={el}>{children}</Heading>
      </div>
    );
  }
}

export default withColor(
  styled(Banner)`
    ${componentStyle}
  `,
);
