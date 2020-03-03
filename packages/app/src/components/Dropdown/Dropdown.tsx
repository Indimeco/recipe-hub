import React, { useRef, useEffect } from 'react';

import { Link } from '../Link/Link';

import { DropdownWrapper, DropdownItem } from './Dropdown.style';

interface DropdownProps {
  isOpen: boolean;
  content: { text: string; href?: string; to?: any }[];
  onRequestClose: () => void;
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ isOpen, onRequestClose, content }) => {
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
    <DropdownWrapper ref={dropdownNode}>
      {content.map(({ text, href, to }) => (
        <DropdownItem key={`dropdown-${text}`}>
          <Link to={to} href={href}>
            {text}
          </Link>
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
