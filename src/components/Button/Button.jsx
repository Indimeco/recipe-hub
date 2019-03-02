import React from 'react';
import styled from 'styled-components';
import componentStyle from './Button';

class Button extends React.Component {
  render() {
    const { className, children, ...restProps } = this.props;
    return <button className={`${className} button`}>{children}</button>;
  }
}

export default styled(Button)`
  ${componentStyle}
`;
