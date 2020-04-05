import React from 'react';

import { Link } from '../Link/Link';

import { NavWrapper, NavLinkList, NavLink } from './Navbar.style';

const Navbar = () => (
  <NavWrapper>
    <NavLinkList>
      <NavLink>
        <Link invert to="/">
          My Books
        </Link>
      </NavLink>
      <NavLink>
        <Link invert to="/">
          Hot
        </Link>
      </NavLink>
    </NavLinkList>
  </NavWrapper>
);

export default Navbar;
