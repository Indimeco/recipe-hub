import React from 'react';
import styled from 'styled-components';
import componentStyle from './Textarea.style';

class Textarea extends React.Component {
  render() {
    const { className, subTheme, placeHolder, ...restProps } = this.props;
    return (
      <textarea
        className={className}
        placeholder={placeHolder}
        {...restProps}
      />
    );
  }
}

export default styled(Textarea)`
  ${componentStyle}
`;
