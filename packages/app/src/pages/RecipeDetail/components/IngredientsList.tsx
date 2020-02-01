import React, { useState, useReducer, Reducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Recipe } from '../../../../../../types';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import SrText from '../../../components/SrText/SrText';

import { IngredientsBox, EditContainer } from './IngredientsList.style';

// TODO Add ingredient
// TODO Reorder ingredient

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
    const { type, index } = action;
    switch (type) {
      case 'update':
        const { value } = action;
        return [...state.slice(0, index), value, ...state.slice(index + 1)];

      case 'remove':
        return [...state.slice(0, index), ...state.slice(index + 1)];

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
    toggleEdit(false);
  };

  return (
    <IngredientsBox>
      <ToggleEdit edit={isEditMode} onSave={save} onClick={() => toggleEdit(!isEditMode)}>
        {isEditMode ? (
          <div>
            <EditContainer>
              <div>
                <label id="ingredientslist__name">Name</label>
                <label id="ingredientslist__quantity">Quantity</label>
                <label id="ingredientslist__unit">Unit</label>
              </div>
              {state &&
                state.map((item, index) => (
                  <div key={`ingredientlist__edit-${item.key}`}>
                    <Input
                      name="name"
                      aria-labelledby="ingredientslist__name"
                      data-testid="ingredientslist__name__input"
                      onChange={event =>
                        dispatch({ type: 'update', index, value: { ...item, name: event.target.value } })
                      }
                      value={item?.name}
                    />
                    <Input
                      name="quantity"
                      aria-labelledby="ingredientslist__quantity"
                      data-testid="ingredientslist__quantity__input"
                      onChange={event =>
                        dispatch({ type: 'update', index, value: { ...item, quantity: event.target.value } })
                      }
                      value={item?.quantity}
                    />
                    <Input
                      name="unit"
                      aria-labelledby="ingredientslist__unit"
                      data-testid="ingredientslist__unit__input"
                      onChange={event =>
                        dispatch({ type: 'update', index, value: { ...item, unit: event.target.value } })
                      }
                      value={item?.unit}
                    />
                    <Button inlineStyle onClick={() => dispatch({ type: 'remove', index })}>
                      <FontAwesomeIcon icon={faTimes} />
                      <SrText>Delete</SrText>
                    </Button>
                  </div>
                ))}
            </EditContainer>
          </div>
        ) : (
          <ul>
            {state && state.map(item => <li key={item.key}> {`${item?.quantity}${item?.unit} ${item?.name}`}</li>)}
          </ul>
        )}
      </ToggleEdit>
    </IngredientsBox>
  );
};

export default IngredientsList;
