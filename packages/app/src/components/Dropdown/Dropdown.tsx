import React, { useRef, useEffect } from 'react';

import { Link } from '../Link/Link';

import { DropdownWrapper, DropdownItem, RelativeContext } from './Dropdown.style';

interface DropdownProps {
  isOpen: boolean;
  content: { text: string; href?: string; to?: any; onClick?: (props: any) => any }[];
  onRequestClose: () => void;
}

export const Dropdown: React.FunctionComponent<DropdownProps> = ({ isOpen, onRequestClose, content }) => {
  const dropdownNode = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const clearDropdown = (e: any) => {
      if (!dropdownNode.current?.contains(e.target)) onRequestClose();
    };

    if (isOpen) {
      document.addEventListener('mousedown', clearDropdown);
    }

    return () => document.removeEventListener('mousedown', clearDropdown);
  }, [isOpen, onRequestClose]);

  if (!isOpen) return null;

  return (
    <RelativeContext>
      <DropdownWrapper ref={dropdownNode}>
        {content.map(({ text, ...restProps }) => (
          <DropdownItem key={`dropdown-${text}`}>
            <Link {...restProps}>{text}</Link>
          </DropdownItem>
        ))}
      </DropdownWrapper>
    </RelativeContext>
  );
};

export default Dropdown;
