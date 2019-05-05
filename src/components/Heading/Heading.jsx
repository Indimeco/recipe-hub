import React from 'react';
import styled from 'styled-components';
import componentStyle from './Heading.style';
import withColor from '../../hocs/withColor';

class Header extends React.Component {
	render() {
		const { el: El, color, ...restProps } = this.props;
		return <El {...restProps} />;
	}
}

export default withColor(
	styled(Header)`
    ${componentStyle}
  `
);
