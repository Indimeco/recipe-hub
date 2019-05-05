import React from 'react';
import styled from 'styled-components';
import componentStyle from './Fieldset.style';
import withColor from '../../hocs/withColor';

class Fieldset extends React.Component {
	render() {
		const { className, color, label, children, ...restProps } = this.props;
		return (
			<fieldset className={className} {...restProps}>
				<legend>{label}</legend>
				{children}
			</fieldset>
		);
	}
}

export default withColor(
	styled(Fieldset)`
    ${componentStyle}
  `
);
