import React from 'react';
import styled from 'styled-components';
import componentStyle from './Input.style';

class Input extends React.Component {
  render() {
    const { className, subTheme, placeHolder, ...restProps } = this.props;
    return (
      <input className={className} placeholder={placeHolder} {...restProps} />
    );
  }
}

export default styled(Input)`
  ${componentStyle}
`;
