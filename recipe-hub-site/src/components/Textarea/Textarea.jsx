import React from 'react';
import styled from 'styled-components';
import componentStyle from './Textarea.style';
import withColor from '../../hocs/withColor';

class Textarea extends React.Component {
	render() {
		const { className, color, placeHolder, ...restProps } = this.props;
		return (
			<textarea
				className={className}
				placeholder={placeHolder}
				{...restProps}
			/>
		);
	}
}

export default withColor(
	styled(Textarea)`
    ${componentStyle}
  `
);
