import React from 'react';

import { NavWrapper, NavLinkList, NavLink } from './Navbar.style';

const Navbar = () => (
  <NavWrapper>
    <NavLinkList>
      <li>
        <NavLink to="/">My Books</NavLink>
      </li>
      <li>
        <NavLink to="/">Hot</NavLink>
      </li>
    </NavLinkList>
  </NavWrapper>
);

export default Navbar;
