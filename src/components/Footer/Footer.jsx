import React from 'react';
import styled from 'styled-components';
import { footerStyle, spacingStyle } from './Footer.style';
import withColor from '../../hocs/withColor';

const StickyBar = styled.div`
  ${footerStyle}
`;

const Spacing = styled.div`
  ${spacingStyle}
`;

class Footer extends React.Component {
	render() {
		const { className, color, ...restProps } = this.props;
		return (
			<div>
				<Spacing />
				<StickyBar color={color} id="footer">
					<p>Footer text</p>
				</StickyBar>
			</div>
		);
	}
}

export default withColor(Footer);
