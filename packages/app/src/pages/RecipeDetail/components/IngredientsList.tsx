import React, { useState, ChangeEvent } from 'react';

import { Recipe } from '../../../../../../types';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';

import { IngredientsBox, EditContainer } from './IngredientsList.style';

// FIXME Edit mode of IngredientsList is very unperformant
// TODO Add ingredient
// TODO Remove ingrediant
// TODO Reorder ingredient
// TODO tests
interface IngredientsListProps {
  ingredients: Recipe['ingredients'];
  handleSave: (payload: { ingredients: Recipe['ingredients'] }) => void;
}
const IngredientsList: React.FunctionComponent<IngredientsListProps> = ({ ingredients, handleSave }) => {
  // sanitize graphql typenames
  const initializeIngredients = (raw: Recipe['ingredients']) =>
    raw
      ? raw.map((item, index) => ({
          name: item?.name || '',
          quantity: item?.quantity || '',
          unit: item?.unit || '',
          [Symbol('key')]: `ingredient-${index}`,
        }))
      : [];

  const [isEditMode, toggleEdit] = useState(false);
  const [inputIngredients, setInputIngredients] = useState(initializeIngredients(ingredients));

  const updateIngredient = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setInputIngredients([
      ...inputIngredients.slice(0, index),
      { ...inputIngredients[index], [name]: value },
      ...inputIngredients.slice(index + 1),
    ]);
  };

  const save = () => {
    handleSave({
      ingredients: inputIngredients,
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
            {inputIngredients &&
              // TODO give ingredients a unique id to use as keys
              inputIngredients.map((item, index) => (
                <div key={`ingredientlist__edit-${item?.key}`}>
                  <Input
                    name="name"
                    aria-labelledby="ingredientslist-name"
                    onChange={e => updateIngredient(index, e)}
                    value={item?.name}
                  />
                  <Input
                    name="quantity"
                    aria-labelledby="ingredientslist-quantity"
                    onChange={e => updateIngredient(index, e)}
                    value={item?.quantity}
                  />
                  <Input
                    name="unit"
                    aria-labelledby="ingredientslist-unit"
                    onChange={e => updateIngredient(index, e)}
                    value={item?.unit}
                  />
                </div>
              ))}
          </EditContainer>
        </div>
      ) : (
        <ul>
          {inputIngredients &&
            inputIngredients.map(item => <li key={item?.key}> {`${item?.quantity}${item?.unit} ${item?.name}`}</li>)}
        </ul>
      )}
    </IngredientsBox>
  );
};

export default IngredientsList;
