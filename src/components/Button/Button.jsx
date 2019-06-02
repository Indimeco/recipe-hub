import React from 'react';
import styled from 'styled-components';
import componentStyle from './Button.style';
import withColor from '../../hocs/withColor';
import PropTypes from 'prop-types';

class Button extends React.Component {
	render() {
		const { color, inline, ...restProps } = this.props;
		return <button {...restProps} />;
	}
}

Button.propTypes = {
	color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	inline: PropTypes.bool,
}

export default withColor(
	styled(Button)`
    ${componentStyle}
  `
);