import React from 'react';
import styled from 'styled-components';
import componentStyle from './Input.style';
import withColor from '../../hocs/withColor';
import PropTypes from 'prop-types';

class Input extends React.Component {
	render() {
		const { className, color, placeHolder, inline, ...restProps } = this.props;
		return (
			<input className={className} placeholder={placeHolder} {...restProps} />
		);
	}
}

Input.propTypes = {
	color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	placeHolder: PropTypes.string,
	className: PropTypes.string,
	inline: PropTypes.bool,
};

export default withColor(
	styled(Input)`
    ${componentStyle}
  `
);
