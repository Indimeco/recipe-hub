import React from 'react';
import styled from 'styled-components';
import componentStyle from './Fieldset.style';

class Fieldset extends React.Component {
  render() {
    const { className, subTheme, label, children, ...restProps } = this.props;
    return (
      <fieldset className={className} {...restProps}>
        <legend>{label}</legend>
        {children}
      </fieldset>
    );
  }
}

export default styled(Fieldset)`
  ${componentStyle}
`;
