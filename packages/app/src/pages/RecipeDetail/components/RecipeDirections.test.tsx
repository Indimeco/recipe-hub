import React from 'react';
import { render, within, fireEvent } from '@testing-library/react';

import RecipeDirections from './RecipeDirections';

const sampleDirections = `
1) Step one
2) Step two
3) Step three
4) Step four
`
describe('CookTime', () => {
    it('Renders initial value', async () => {
        const { getByText } = render(<RecipeDirections directions={sampleDirections} handleSave={() => { console.log('handleSave called'); }} />)

        expect(getByText('1) Step one')).toBeInTheDocument();
    });

    it('changes value when edited', async () => {
        const { getByText, getByLabelText } = render(
            <RecipeDirections
                directions={sampleDirections}
                handleSave={() => {
                    console.log('handleSave called');
                }}
            />,
        );

        getByText('Edit').click();
        fireEvent.change(getByLabelText('Directions'), { target: { value: '123' } });
        expect(getByLabelText('Directions')).toHaveValue('123');
    });
});
