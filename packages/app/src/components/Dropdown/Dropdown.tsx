import React from 'react';
import { Link } from 'react-router-dom';

import { DropdownWrapper } from './Dropdown.style';

interface DropdownProps {
  isOpen: boolean;
  content: [{ text: string; href?: string; to?: any }];
}

const Dropdown: React.FunctionComponent<DropdownProps> = ({ isOpen, content }) => {
  if (!isOpen) return null;
  return (
    <DropdownWrapper>
      {content.map(({ text, href, to }) => {
        if (href)
          return (
            <a key={`dropdown-${href}`} href={href}>
              {text}
            </a>
          );
        return (
          <Link key={`dropdown-${to}`} to={to}>
            {text}
          </Link>
        );
      })}
    </DropdownWrapper>
  );
};

export default Dropdown;
