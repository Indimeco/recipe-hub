import React from 'react';
import styled from 'styled-components';
import componentStyle from './Banner.style';

class Banner extends React.Component {
  render() {
    const { className, ...restProps } = this.props;
    return (
      <span id="banner" className={className}>
        <h1>RecipeHub</h1>
      </span>
    );
  }
}

export default styled(Banner)`
  ${componentStyle}
`;
