import React from 'react';
import PropTypes from 'prop-types';
import ToggleEdit from '../../ToggleEdit/ToggleEdit';
import styled from 'styled-components';
import Input from '../../Input/Input';

const EditContainer = styled.div`
	div {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
	}
`;

export class IngredientsList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			ingredients: props.ingredients
		};
	}

	updateIngredient(index, e) {
		let target = e.target;
		this.setState(state => {
			let ingredients = state.ingredients;
			ingredients[index][target.name] = target.value;

			return { ingredients };
		});
	}



	render() {
		const { ingredients, ...restProps } = this.props;
		return (
			<div {...restProps}>
				<ToggleEdit edit={this.state.edit} onClick={() => this.setState({ edit: !this.state.edit })} />
				{this.state.edit
					? <div>
						<EditContainer>
							<div>
								<span>Name</span>
								<span>Quantity</span>
								<span>Unit</span>
							</div>
							{Object.keys(ingredients).map((x, y) => (
								<div key={`ingredient-${y}`}>
									<Input name="name" onChange={this.updateIngredient.bind(this, y)} value={ingredients[x].name} />
									<Input name="quantity" onChange={this.updateIngredient.bind(this, y)} value={ingredients[x].quantity} />
									<Input name="unit" onChange={this.updateIngredient.bind(this, y)} value={ingredients[x].unit} />
								</div>
							))}
						</EditContainer>
					</div>
					: <ul>
						{Object.keys(ingredients).map(x => (
							<li key={`recipes${x}`}>
								{`${ingredients[x].quantity}${ingredients[x].unit} ${ingredients[x].name}`}
							</li>
						))}
					</ul>
				}
			</div>
		);
	}
}

IngredientsList.propTypes = {
	ingredients: PropTypes.array,
};

export default IngredientsList;
