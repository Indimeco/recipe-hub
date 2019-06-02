import React from 'react';
import styled from 'styled-components';
import { wrapperStyle, labelStyle } from './FieldWrapper.style';
import withColor from '../../hocs/withColor';
import PropTypes from 'prop-types';

const randomId = (length) => {
	return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
};

const FieldWrapper = ({ color, label, children, inline, ...restProps }) => {
	const isOnly = React.Children.only(children);

	const id = `${randomId(6)}-${children.props.name}`;
	const Clone = isOnly ? React.cloneElement(children, { id: id }) : null;

	const Wrapper = styled[Clone.isGroupedFormField ? 'fieldset' : 'div']`${wrapperStyle}`;
	const Label = styled[Clone.isGroupedFormField ? 'legend' : 'label']`${labelStyle}`;
	const wrapperProps = { inline, ...restProps };
	const labelProps = { htmlFor: id, inline, color };

	// Reverse order of Clone/Label
	return inline
		?
		(<Wrapper {...wrapperProps}>
			{Clone}
			<Label {...labelProps}>{label}</Label>
		</Wrapper>)
		:
		(<Wrapper {...wrapperProps}>
			<Label {...labelProps}>{label}</Label>
			{Clone}
		</Wrapper>);
};

FieldWrapper.propTypes = {
	color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	label: PropTypes.string,
	children: PropTypes.object,
	inline: PropTypes.bool,
};

export default withColor(FieldWrapper);
