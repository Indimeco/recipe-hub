import React from 'react';
import styled from 'styled-components';

import withColor from '../../hocs/withColor';

import componentStyle from './Image.style';

class Image extends React.Component {
  render() {
    const { className, color, src, alt, ...restProps } = this.props;
    return (
      <div className={`${className} image`}>
        <img src={src} alt={alt} {...restProps} />
      </div>
    );
  }
}

export default withColor(
  styled(Image)`
    ${componentStyle}
  `,
);
