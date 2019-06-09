import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import componentStyle from './ToggleEdit.style';
import withColor from '../../hocs/withColor';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPen } from '@fortawesome/free-solid-svg-icons';

const ToggleButtonWrapper = styled.div`${componentStyle}`;

const ToggleEdit = ({ edit, color, onClick, ...restProps }) => ( 
	<ToggleButtonWrapper {...restProps}>
		<Button onClick={onClick} color={color} inline>
			<FontAwesomeIcon icon={edit ? faTimes : faPen}/>
		</Button>
	</ToggleButtonWrapper>
);

ToggleEdit.propTypes = {
	color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	edit: PropTypes.bool,
	onClick: PropTypes.func
};

export default withColor(ToggleEdit);
