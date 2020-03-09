import { render, fireEvent } from '@testing-library/react';
import React, { useState } from 'react';

import Dropdown from './Dropdown';

const response1 = 'In a neighborhood of fountains';
const response2 = 'And by the sound';
const response3 = 'Soft showering in my ears';

const dropdownProps = {
  isOpen: false,
  onRequestClose: () => null,
  content: [
    { text: response1, href: '/test' },
    { text: response2, onClick: () => null },
    { text: response3, href: '/test' },
  ],
};

describe('Dropdown', () => {
  it('renders', () => {
    const { getByText } = render(<Dropdown {...dropdownProps} isOpen />);

    expect(getByText(response1)).toBeInTheDocument();
    expect(getByText(response2)).toBeInTheDocument();
    expect(getByText(response3)).toBeInTheDocument();
  });

  it('closes when clicked outside', async () => {
    const StateHolder = () => {
      const [isDropdownOpen, setDropdownOpen] = useState(false);

      return (
        <>
          <div>
            <button type="button">unrelated</button>
          </div>
          <button type="button" onClick={() => setDropdownOpen(!isDropdownOpen)}>
            Vorpal sword
          </button>
          <Dropdown {...dropdownProps} isOpen={isDropdownOpen} onRequestClose={() => setDropdownOpen(false)} />
        </>
      );
    };

    const { getByText, queryByText } = render(<StateHolder />);

    expect(queryByText(response1)).not.toBeInTheDocument();
    getByText('Vorpal sword').click();
    expect(getByText(response1)).toBeInTheDocument();

    /* 
      This is required for some reason, and the order matters.
      Using only click or mousedown does not invoke useEffect event
    */
    fireEvent.click(getByText('unrelated'));
    fireEvent.mouseDown(getByText('unrelated'));

    expect(queryByText(response1)).not.toBeInTheDocument();
  });
});
