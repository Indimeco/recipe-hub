import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { RecipeImage } from './RecipeImage';
import { recipeDetailControlProps, EditableRecipeDetailControl } from './testUtils';

const samplepreviewImage = 'http://fuusenisthebest.com';
const expectedAlt = 'Recipe display image';

describe('RecipeImage', () => {
  it('Renders initial value', async () => {
    const { getByAltText, queryByTestId } = render(
      <RecipeImage previewImage={samplepreviewImage} {...recipeDetailControlProps} />,
    );

    expect(getByAltText(expectedAlt)).toBeInTheDocument();
    expect(queryByTestId('Image__Placeholder')).not.toBeInTheDocument();
  });

  it('changes value when edited', async () => {
    const { getByText, getByLabelText } = render(
      <EditableRecipeDetailControl>
        <RecipeImage previewImage={samplepreviewImage} {...recipeDetailControlProps} />
      </EditableRecipeDetailControl>,
    );

    getByText('Edit').click();
    fireEvent.change(getByLabelText('Preview image'), { target: { value: '123' } });
    expect(getByLabelText('Preview image')).toHaveValue('123');
  });

  it('renders svg when no image supplied', () => {
    const { getByTestId } = render(<RecipeImage previewImage="" {...recipeDetailControlProps} />);

    expect(getByTestId('Image__Placeholder')).toBeInTheDocument();
  });
});
