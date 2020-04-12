import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { RecipeImage } from './RecipeImage';

const samplepreviewImage = 'http://fuusenisthebest.com';
const expectedAlt = 'Recipe display image';

describe('RecipeImage', () => {
  it('Renders initial value', async () => {
    const { getByAltText } = render(
      <RecipeImage
        previewImage={samplepreviewImage}
        handleSave={() => {
          console.log('handleSave called');
        }}
      />,
    );

    expect(getByAltText(expectedAlt)).toBeInTheDocument();
  });

  it('changes value when edited', async () => {
    const { getByText, getByLabelText } = render(
      <RecipeImage
        previewImage={samplepreviewImage}
        handleSave={() => {
          console.log('handleSave called');
        }}
      />,
    );

    getByText('Edit').click();
    fireEvent.change(getByLabelText('Preview image'), { target: { value: '123' } });
    expect(getByLabelText('Preview image')).toHaveValue('123');
  });
});
