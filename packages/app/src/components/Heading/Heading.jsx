import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withColor from '../../hocs/withColor';

import componentStyle from './Heading.style';

class Header extends React.Component {
  render() {
    const { el: El, color, ...restProps } = this.props;
    return <El {...restProps} />;
  }
}

Header.propTypes = {
  el: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withColor(
  styled(Header)`
    ${componentStyle}
  `,
);
