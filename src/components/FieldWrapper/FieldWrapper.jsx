import React from 'react';
import styled from 'styled-components';
import componentStyle from './FieldWrapper.style';

class FieldWrapper extends React.Component {
  render() {
    const { className, label, children, ...restProps } = this.props;
    return (
      <div className={className} {...restProps}>
        <label>{label}</label>
        {children}
      </div>
    );
  }
}

export default styled(FieldWrapper)`
  ${componentStyle}
`;
