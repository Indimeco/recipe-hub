import React, { useState, ChangeEvent } from 'react';

import { Recipe } from '../../../../../../types';
import ToggleEdit from '../../../components/ToggleEdit/ToggleEdit';
import Input from '../../../components/Input/Input';

import { IngredientsBox, EditContainer } from './IngredientsList.style';

interface IngredientsListProps {
  ingredients: Recipe['ingredients'];
  handleSave: (payload: { ingredients: Recipe['ingredients'] }) => void;
}
const IngredientsList: React.FunctionComponent<IngredientsListProps> = ({ ingredients, handleSave }) => {
  const [isEditMode, toggleEdit] = useState(false);
  const [inputIngredients, setInputIngredients] = useState(ingredients);

  const updateIngredient = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
  
    inputIngredients[index][name] = value;
    setInputIngredients(inputIngredients);
  };
  const save = () => {
    console.log(inputIngredients);

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
              inputIngredients.map((item, index) => (
                <div key={`ingredient__edit${index}`}>
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
            inputIngredients.map((item, index) => (
              <li key={`ingredient${index}`}> {`${item?.quantity}${item?.unit} ${item?.name}`}</li>
            ))}
        </ul>
      )}
    </IngredientsBox>
  );
};

export default IngredientsList;
