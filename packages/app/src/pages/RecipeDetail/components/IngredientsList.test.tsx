import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { recipeDetailControlProps, EditableRecipeDetailControl } from './testUtils';
import IngredientsList from './IngredientsList';

const initialIngredients = [
  { name: 'test item with no quantity', quantity: '', unit: '' },
  { name: 'red capsicum', quantity: '1', unit: '' },
  { name: 'garlic cloves', quantity: '6', unit: '' },
  { name: 'chili powder', quantity: '0.25', unit: 'cup' },
  { name: 'ground cumin', quantity: '1', unit: 'tbsp' },
  { name: 'ground beef', quantity: '1', unit: 'kg' },
  { name: 'diced tomato', quantity: '800', unit: 'g' },
  { name: 'tomato sauce', quantity: '400', unit: 'g' },
  { name: 'kidney beans', quantity: '850', unit: 'g' },
  { name: 'shredded cheddar', quantity: '0', unit: '' },
  { name: 'sour cream', quantity: '250', unit: 'g' },
  { name: 'tortilla', quantity: '8', unit: '' },
  { name: 'tortilla chips', quantity: '500', unit: 'g' },
];

describe('IngredientsList', () => {
  it('renders separated ingredients', async () => {
    const { getByText } = render(<IngredientsList ingredients={initialIngredients} {...recipeDetailControlProps} />);

    initialIngredients.forEach((item) =>
      expect(getByText(new RegExp(`${item.quantity}${item.unit}\\s?${item.name}`))).toBeInTheDocument(),
    );
  });

  it('changes values when edited', async () => {
    const { getByText, getAllByTestId } = render(
      <EditableRecipeDetailControl>
        <IngredientsList ingredients={initialIngredients} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    const firstName = getAllByTestId('ingredientslist__name__input')[0];
    fireEvent.change(firstName, { target: { value: '123' } });
    expect(firstName).toHaveValue('123');

    const secondQuantity = getAllByTestId('ingredientslist__quantity__input')[1];
    fireEvent.change(secondQuantity, { target: { value: '123' } });
    expect(secondQuantity).toHaveValue('123');

    const thirdUnit = getAllByTestId('ingredientslist__unit__input')[2];
    fireEvent.change(thirdUnit, { target: { value: '123' } });
    expect(thirdUnit).toHaveValue('123');
  });

  it('deletes ingredient when delete is actioned', () => {
    const { getByText, getAllByText, getAllByTestId } = render(
      <EditableRecipeDetailControl>
        <IngredientsList ingredients={initialIngredients} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    const initialFirstNameInputs = getAllByTestId('ingredientslist__name__input');

    getAllByText('Delete')[0].click();

    expect(getAllByTestId('ingredientslist__name__input')).toHaveLength(initialFirstNameInputs.length - 1);
    expect(initialFirstNameInputs[0]).not.toBeInTheDocument();
  });

  it('adds ingredients when add is actioned', () => {
    const { getByText, getAllByTestId } = render(
      <EditableRecipeDetailControl>
        <IngredientsList ingredients={initialIngredients} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    const initialFirstNameInputs = getAllByTestId('ingredientslist__name__input');

    getByText('Add').click();

    expect(getAllByTestId('ingredientslist__name__input')).toHaveLength(initialFirstNameInputs.length + 1);
  });

  it('shows initial ingredients when undo is actioned', () => {
    const { getByText, getAllByText } = render(
      <EditableRecipeDetailControl>
        <IngredientsList ingredients={initialIngredients} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    getAllByText('Delete')[0].click();

    getByText('Undo').click();

    expect(getByText(initialIngredients[0].name)).toBeInTheDocument();
  });
});
