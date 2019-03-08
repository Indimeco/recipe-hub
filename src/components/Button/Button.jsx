import React from 'react';
import styled from 'styled-components';
import componentStyle from './Button.style';

class Button extends React.Component {
  render() {
    const { subTheme, ...restProps } = this.props;
    return <button {...restProps} />;
  }
}

export default styled(Button)`
  ${componentStyle}
`;
