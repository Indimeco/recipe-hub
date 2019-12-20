import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ToggleEdit from '../../ToggleEdit/ToggleEdit';
import Input from '../../Input/Input';

const EditContainer = styled.div`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const ingredientsBoxStyle = props =>
  css`
    padding: ${props.theme.spacing.small};
  `;

const IngredientsBox = styled.div`
  ${ingredientsBoxStyle};
`;

export class IngredientsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      ingredients: props.ingredients,
    };
  }

  updateIngredient(index, e) {
    const { target } = e;
    this.setState(state => {
      const { ingredients } = state;
      ingredients[index][target.name] = target;

      return { ingredients };
    });
  }

  render() {
    const { ingredients, color, ...restProps } = this.props;
    return (
      <IngredientsBox {...restProps}>
        <ToggleEdit color={color} edit={this.state.edit} onClick={() => this.setState({ edit: !this.state.edit })} />
        {this.state.edit ? (
          <div>
            <EditContainer>
              <div>
                <span id="ingredientslist-name">Name</span>
                <span id="ingredientslist-quantity">Quantity</span>
                <span id="ingredientslist-unit">Unit</span>
              </div>
              {Object.keys(ingredients).map((x, y) => (
                <div key={`ingredient-${y}`}>
                  <Input
                    name="name"
                    aria-labelledby="ingredientslist-name"
                    onChange={this.updateIngredient.bind(this, y)}
                    value={ingredients[x].name}
                  />
                  <Input
                    name="quantity"
                    aria-labelledby="ingredientslist-quantity"
                    onChange={this.updateIngredient.bind(this, y)}
                    value={ingredients[x].quantity}
                  />
                  <Input
                    name="unit"
                    aria-labelledby="ingredientslist-unit"
                    onChange={this.updateIngredient.bind(this, y)}
                    value={ingredients[x].unit}
                  />
                </div>
              ))}
            </EditContainer>
          </div>
        ) : (
            <ul>
              {Object.keys(ingredients).map(x => (
                <li key={`recipes${x}`}>{`${ingredients[x].quantity}${ingredients[x].unit} ${ingredients[x].name}`}</li>
              ))}
            </ul>
          )}
      </IngredientsBox>
    );
  }
}

IngredientsList.propTypes = {
  ingredients: PropTypes.array,
  color: PropTypes.object,
};

export default IngredientsList;
