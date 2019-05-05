import React from 'react';
import styled from 'styled-components';
import componentStyle from './Button.style';
import withColor from '../../hocs/withColor';

class Button extends React.Component {
	render() {
		const { color, ...restProps } = this.props;
		return <button {...restProps} />;
	}
}

export default withColor(
	styled(Button)`
    ${componentStyle}
  `
);
