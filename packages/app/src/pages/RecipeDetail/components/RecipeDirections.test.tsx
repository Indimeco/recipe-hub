import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RecipeDirections from './RecipeDirections';
import { recipeDetailControlProps, EditableRecipeDetailControl } from './testUtils';

const sampleDirections = `
1) Step one
2) Step two
3) Step three
4) Step four
`;

describe('RecipeDirections', () => {
  it('Renders initial value', async () => {
    const { getByText } = render(<RecipeDirections directions={sampleDirections} {...recipeDetailControlProps} />);

    expect(getByText('1) Step one')).toBeInTheDocument();
  });

  it('changes value when edited', async () => {
    const { getByText, getByLabelText } = render(
      <EditableRecipeDetailControl>
        <RecipeDirections directions={sampleDirections} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();
    fireEvent.change(getByLabelText('Directions'), { target: { value: '123' } });
    expect(getByLabelText('Directions')).toHaveValue('123');
  });

  it('shows initial directions when undo is actioned', () => {
    const { getByText, getByLabelText } = render(
      <EditableRecipeDetailControl>
        <RecipeDirections directions={sampleDirections} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    fireEvent.change(getByLabelText('Directions'), { target: { value: '123' } });

    getByText('Undo').click();

    expect(getByText('1) Step one')).toBeInTheDocument();
  });
});
