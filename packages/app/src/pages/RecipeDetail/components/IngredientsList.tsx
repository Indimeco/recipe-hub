import React, { useEffect, useReducer, Reducer } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';
import { uuid } from 'uuidv4';

import { Recipe } from '../../../../../../types';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import SrText from '../../../components/SrText/SrText';
import Heading from '../../../components/Heading/Heading';
import { Text } from '../../../components';
import { RecipeDetailControl } from '../types';

import { IngredientsUl, IngredientsContainer, EditContainer } from './IngredientsList.style';

// TODO Reorder ingredient

type MutatedIngredient = {
  name: string;
  quantity: string;
  unit: string;
  key: string;
};

type IngredientUpdateAction = {
  type: 'update';
  index: number;
  value: MutatedIngredient;
};
type IngredientRemoveAction = {
  type: 'remove';
  index: number;
};
type IngredientReplaceAction = {
  type: 'replace';
  value: MutatedIngredient[];
};
type IngredientAddAction = {
  type: 'add';
};
type IngredientAction = IngredientUpdateAction | IngredientRemoveAction | IngredientReplaceAction | IngredientAddAction;

const getBlankIngredient = (): MutatedIngredient => ({
  name: '',
  unit: '',
  quantity: '',
  key: `ingredient${uuid()}`,
});

interface IngredientsListProps extends RecipeDetailControl {
  ingredients: Recipe['ingredients'];
}
export const IngredientsList: React.FunctionComponent<IngredientsListProps> = ({
  ingredients,
  isEditMode,
  dispatch,
}) => {
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
    switch (action.type) {
      case 'update':
        return [...state.slice(0, action.index), action.value, ...state.slice(action.index + 1)];

      case 'remove':
        return [...state.slice(0, action.index), ...state.slice(action.index + 1)];

      case 'replace':
        return action.value;

      case 'add':
        return [...state, getBlankIngredient()];

      default:
        throw new Error(`Unhandled reducer action: ${action}`);
    }
  };

  const [state, internalDispatch] = useReducer(handleChange, ingredients, initializeIngredients);

  const removeEmpty = (ingred: MutatedIngredient[]) => ingred.filter((item) => item.name !== '');

  useEffect(() => {
    if (isEditMode === false) {
      internalDispatch({ type: 'replace', value: initializeIngredients(ingredients) });
    }
  }, [isEditMode, internalDispatch, ingredients]);

  useEffect(() => {
    if (isEditMode === true) {
      const payload = removeEmpty(state).map((item) => ({ name: item.name, quantity: item.quantity, unit: item.unit }));
      dispatch({
        type: 'update',
        value: {
          ingredients: payload,
        },
      });
    }
  }, [isEditMode, state, dispatch]);

  return (
    <IngredientsContainer as={isEditMode ? 'fieldset' : 'div'}>
      <Heading el={isEditMode ? 'legend' : 'h3'} level="h3">
        Ingredients
      </Heading>
      {isEditMode ? (
        <EditContainer>
          <div>
            <Heading el="label" level="h4" id="ingredientslist__name">
              Name
            </Heading>
            <Heading el="label" level="h4" id="ingredientslist__quantity">
              Quantity
            </Heading>
            <Heading el="label" level="h4" id="ingredientslist__unit">
              Unit
            </Heading>
          </div>
          {state &&
            state.map((item, index) => (
              <div key={`ingredientlist__edit-${item.key}`}>
                <Input
                  name="name"
                  aria-labelledby="ingredientslist__name"
                  data-testid="ingredientslist__name__input"
                  onChange={(event) =>
                    internalDispatch({ type: 'update', index, value: { ...item, name: event.target.value } })
                  }
                  value={item?.name}
                />
                <Input
                  name="quantity"
                  aria-labelledby="ingredientslist__quantity"
                  data-testid="ingredientslist__quantity__input"
                  onChange={(event) =>
                    internalDispatch({ type: 'update', index, value: { ...item, quantity: event.target.value } })
                  }
                  value={item?.quantity}
                />
                <Input
                  name="unit"
                  aria-labelledby="ingredientslist__unit"
                  data-testid="ingredientslist__unit__input"
                  onChange={(event) =>
                    internalDispatch({ type: 'update', index, value: { ...item, unit: event.target.value } })
                  }
                  value={item?.unit}
                />
                <Button inlineStyle onClick={() => internalDispatch({ type: 'remove', index })}>
                  <FontAwesomeIcon icon={faTimes} />
                  <SrText>Delete</SrText>
                </Button>
              </div>
            ))}
          <Button inlineStyle onClick={() => internalDispatch({ type: 'add' })}>
            <FontAwesomeIcon icon={faPlus} />
            <SrText>Add</SrText>
          </Button>
        </EditContainer>
      ) : (
        <IngredientsUl>
          {ingredients &&
            initializeIngredients(ingredients).map((item) => (
              <Text el="li" key={item.key}>
                {' '}
                {`${item?.quantity}${item?.unit} ${item?.name}`}
              </Text>
            ))}
        </IngredientsUl>
      )}
    </IngredientsContainer>
  );
};

export default IngredientsList;
