import React from 'react';
import styled from 'styled-components';
import componentStyle from './FieldWrapper.style';
import withColor from '../../hocs/withColor';

class FieldWrapper extends React.Component {
  render() {
    const { className, color, label, children, ...restProps } = this.props;
    return (
      <div className={className} {...restProps}>
        <label>{label}</label>
        {children}
      </div>
    );
  }
}

export default withColor(
  styled(FieldWrapper)`
    ${componentStyle}
  `
);
