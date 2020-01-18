import React, { useState, useReducer, Reducer } from 'react';

import { Recipe } from '../../../../../../types';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';

import { IngredientsBox, EditContainer } from './IngredientsList.style';

// TODO Add ingredient
// TODO Remove ingrediant
// TODO Reorder ingredient
// TODO tests

type MutatedIngredient = {
  name: string;
  quantity: string;
  unit: string;
  key: string;
};

type IngredientAction = {
  type: string;
  index: number;
  [x: string]: any;
};

interface IngredientsListProps {
  ingredients: Recipe['ingredients'];
  handleSave: (payload: { ingredients: Recipe['ingredients'] }) => void;
}
const IngredientsList: React.FunctionComponent<IngredientsListProps> = ({ ingredients, handleSave }) => {
  // sanitize graphql typenames and prep data
  const initializeIngredients = (raw: Recipe['ingredients']): MutatedIngredient[] =>
    raw
      ? raw.map((item, index) => ({
          name: item?.name || '',
          quantity: item?.quantity || '',
          unit: item?.unit || '',
          key: `ingredient-${index}`,
        }))
      : [];

  const handleChange: Reducer<MutatedIngredient[], IngredientAction> = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'update':
        const { index, value } = action;

        return [...state.slice(0, index), value, ...state.slice(index + 1)];

      default:
        throw new Error(`Unhandled reducer action: ${action.type}`);
    }
  };

  const [isEditMode, toggleEdit] = useState(false);
  const [state, dispatch] = useReducer(handleChange, ingredients, initializeIngredients);

  const save = () => {
    const payload = state.map(item => ({ name: item.name, quantity: item.quantity, unit: item.unit }));
    handleSave({
      ingredients: payload,
    });
  };

  return (
    <IngredientsBox>
      <ToggleEdit edit={isEditMode} onSave={save} onClick={() => toggleEdit(!isEditMode)} />
      {isEditMode ? (
        <div>
          <EditContainer>
            <div>
              <span id="ingredientslist-name">Name</span>
              <span id="ingredientslist-quantity">Quantity</span>
              <span id="ingredientslist-unit">Unit</span>
            </div>
            {state &&
              state.map((item, index) => (
                <div key={`ingredientlist__edit-${item.key}`}>
                  <Input
                    name="name"
                    aria-labelledby="ingredientslist-name"
                    onChange={event =>
                      dispatch({ type: 'update', index, value: { ...item, name: event.target.value } })
                    }
                    value={item?.name}
                  />
                  <Input
                    name="quantity"
                    aria-labelledby="ingredientslist-quantity"
                    onChange={event =>
                      dispatch({ type: 'update', index, value: { ...item, quantity: event.target.value } })
                    }
                    value={item?.quantity}
                  />
                  <Input
                    name="unit"
                    aria-labelledby="ingredientslist-unit"
                    onChange={event =>
                      dispatch({ type: 'update', index, value: { ...item, unit: event.target.value } })
                    }
                    value={item?.unit}
                  />
                </div>
              ))}
          </EditContainer>
        </div>
      ) : (
        <ul>{state && state.map(item => <li key={item.key}> {`${item?.quantity}${item?.unit} ${item?.name}`}</li>)}</ul>
      )}
    </IngredientsBox>
  );
};

export default IngredientsList;
