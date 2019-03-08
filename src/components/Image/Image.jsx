import React from 'react';
import styled from 'styled-components';
import componentStyle from './Image.style';

class Image extends React.Component {
  render() {
    const { className, subTheme, src, alt, ...restProps } = this.props;
    return (
      <div className={`${className} image`}>
        <img src={src} alt={alt} {...restProps} />
      </div>
    );
  }
}

export default styled(Image)`
  ${componentStyle}
`;
