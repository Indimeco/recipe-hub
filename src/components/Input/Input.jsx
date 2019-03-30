import React from 'react';
import styled from 'styled-components';
import componentStyle from './Input.style';
import withColor from '../../hocs/withColor';

class Input extends React.Component {
  render() {
    const { className, color, placeHolder, ...restProps } = this.props;
    return (
      <input className={className} placeholder={placeHolder} {...restProps} />
    );
  }
}

export default withColor(
  styled(Input)`
    ${componentStyle}
  `
);
