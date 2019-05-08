import React from 'react';
import styled from 'styled-components';
import withColor from '../../../hocs/withColor';
import componentStyle from './CookTime.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faRunning,
	faHourglass,
	faEquals,
	faPlus
} from '@fortawesome/free-solid-svg-icons';

const TimeBox = styled.span`${componentStyle}`;

const CookTime = ({ active, ready, className, color, ...restProps }) => {
	const getTime = (time) => {
		const hours = Math.round(time / 60);
		const remainder = Math.round(time % 60);

		return `${hours ? hours + 'hr' : ''}${hours && remainder ? ' ' : ''}${remainder ? remainder + 'm' : ''}`;
	};

	return (
		<TimeBox className={className} color={color} {...restProps}>
			<FontAwesomeIcon icon={faClock} />{getTime(active + ready)}
			<FontAwesomeIcon icon={faEquals} />
			<FontAwesomeIcon icon={faRunning} />{getTime(active)}
			<FontAwesomeIcon icon={faPlus} />
			<FontAwesomeIcon icon={faHourglass} />{getTime(ready)}
		</TimeBox>
	);
};

export default withColor(CookTime);