import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import withColor from '../../../hocs/withColor';
import { timeBoxStyle } from './CookTime.style';
import Input from '../../Input/Input';
import FieldWrapper from '../../FieldWrapper/FieldWrapper';
import ToggleEdit from '../../ToggleEdit/ToggleEdit';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faRunning,
	faHourglass,
	faEquals,
	faPlus,
} from '@fortawesome/free-solid-svg-icons';

// TODO : Configure how DB will be updated given changed data (everything should flow back to a state store)
// TODO : FieldWrapper causing a rendering issue which makes input lose focus


const TimeBox = styled.span`${timeBoxStyle}`;

class CookTime extends React.Component {

	constructor(props) {
		super(props);
		const activeTime = this.adaptTime({ total: this.props.active });
		const waitingTime = this.adaptTime({ total: this.props.waiting });

		this.state = {
			edit: false,
			activeTotal: activeTime.total,
			activeCalcMins: activeTime.calcMins,
			activeCalcHrs: activeTime.calcHrs,
			waitingTotal: waitingTime.total,
			waitingCalcMins: waitingTime.calcMins,
			waitingCalcHrs: waitingTime.calcHrs,
		};
	}

	timeString({ calcMins, calcHrs }) {
		return `${calcHrs ? calcHrs + 'hr' : ''}${calcHrs && calcMins ? ' ' : ''}${calcMins ? calcMins + 'm' : ''}`;
	}

	adaptTime({ total, calcMins, calcHrs }) {
		try {
			if (total >= 0) {
				return { total, calcMins: Math.round(total % 60), calcHrs: Math.floor(total / 60) };
			}
			else if (calcMins >= 0 && calcHrs >= 0) {
				return { total: calcMins + (calcHrs * 60), calcMins, calcHrs };
			}
			throw new Error('Invalid argument supplied to adaptTime.');
		}
		catch (err) {
			console.log(`total: ${total} | calcMins: ${calcMins} | calcHrs: ${calcHrs}`);
			console.log(err);
		}
	}

	toggleEdit() {
		this.setState({
			edit: !this.state.edit,
			activeTotal: this.adaptTime({ calcMins: this.state.activeCalcMins, calcHrs: this.state.activeCalcHrs }).total,
			waitingTotal: this.adaptTime({ calcMins: this.state.waitingCalcMins, calcHrs: this.state.waitingCalcHrs }).total,
		});
	}

	handleChange(e) {
		const val = Number(e.target.value) == 0 ? 0 : Number(e.target.value);
		if (val >= 0) { this.setState({ [e.target.name]: val }); }
	}

	render() {
		const { color, ...restProps } = this.props;
		return (
			<TimeBox color={color} {...restProps}>
				<ToggleEdit color={color} edit={this.state.edit} onClick={this.toggleEdit.bind(this)} />
				<FontAwesomeIcon icon={faClock} />{this.timeString(this.adaptTime({ total: this.state.activeTotal + this.state.waitingTotal }))}
				<FontAwesomeIcon icon={faEquals} />
				<FontAwesomeIcon icon={faRunning} />
				{this.state.edit
					?
					<>
						<FieldWrapper label="hours" inline color={color}>
							<Input name="activeCalcHrs" value={this.state.activeCalcHrs} onChange={this.handleChange.bind(this)} inline />
						</FieldWrapper>
						<FieldWrapper label="minutes" inline color={color}>
							<Input name="activeCalcMins" value={this.state.activeCalcMins} onChange={this.handleChange.bind(this)} inline />
						</FieldWrapper>
					</>
					:
					<span>
						{this.timeString({ calcMins: this.state.activeCalcMins, calcHrs: this.state.activeCalcHrs })}
					</span>
				}
				<FontAwesomeIcon icon={faPlus} />
				<FontAwesomeIcon icon={faHourglass} />
				{this.state.edit
					?
					<>
						<FieldWrapper label="hours" inline color={color}>
							<Input name="waitingCalcHrs" value={this.state.waitingCalcHrs} onChange={this.handleChange.bind(this)} inline />
						</FieldWrapper>
						<FieldWrapper label="minutes" inline color={color}>
							<Input name="waitingCalcMins" value={this.state.waitingCalcMins} onChange={this.handleChange.bind(this)} inline />
						</FieldWrapper>
					</>
					: <span>
						{this.timeString({ calcMins: this.state.waitingCalcMins, calcHrs: this.state.waitingCalcHrs })}
					</span>
				}
			</TimeBox>
		);
	}
}

CookTime.propTypes = {
	active: PropTypes.number,
	waiting: PropTypes.number,
	color: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default withColor(CookTime);