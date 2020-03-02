import React from 'react';
import { Link } from 'react-router-dom';

import { DropdownWrapper, DropdownItem } from './Dropdown.style';

interface DropdownProps {
  isOpen: boolean;
  content: { text: string; href?: string; to?: any }[];
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ isOpen, content }) => {
  if (!isOpen) return null;
  return (
    <DropdownWrapper>
      {content.map(({ text, href, to }) => (
        <DropdownItem key={`dropdown-${href}${to}`}>
          {href ? <a href={href}>{text}</a> : <Link to={to}>{text}</Link>}
        </DropdownItem>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
