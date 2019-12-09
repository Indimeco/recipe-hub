import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withColor from '../../hocs/withColor';

import componentStyle from './Input.style';

class Input extends React.Component {
  render() {
    const { className, el, type, placeHolder, inline, ...restProps } = this.props;
    const El = el || 'input';
    return <El type={type || 'text'} className={className} placeholder={placeHolder} {...restProps} />;
  }
}

Input.propTypes = {
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  inline: PropTypes.bool,
  type: PropTypes.string,
  el: PropTypes.string,
};

export default withColor(
  styled(Input)`
    ${componentStyle}
  `,
);
