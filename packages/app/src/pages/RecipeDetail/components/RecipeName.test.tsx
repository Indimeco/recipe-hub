import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { recipeDetailControlProps, EditableRecipeDetailControl } from './testUtils';
import { RecipeName } from './RecipeName';

const sampleName = "Fuusen's Tuna Treat";

describe('RecipeName', () => {
  it('Renders initial value', async () => {
    const { getByText } = render(<RecipeName name={sampleName} {...recipeDetailControlProps} />);

    expect(getByText(sampleName)).toBeInTheDocument();
  });

  it('changes value when edited', async () => {
    const { getByText, getByLabelText } = render(
      <EditableRecipeDetailControl>
        <RecipeName name={sampleName} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();
    fireEvent.change(getByLabelText('Recipe name'), { target: { value: '123' } });
    expect(getByLabelText('Recipe name')).toHaveValue('123');
  });

  it('shows initial name when undo is actioned', () => {
    const { getByText, getByLabelText } = render(
      <EditableRecipeDetailControl>
        <RecipeName name={sampleName} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();

    fireEvent.change(getByLabelText('Recipe name'), { target: { value: '123' } });

    getByText('Undo').click();

    expect(getByText(sampleName)).toBeInTheDocument();
  });
});
