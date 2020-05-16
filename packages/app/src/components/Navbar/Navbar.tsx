import React from 'react';

import Breadcrumbs, { CrumbsType } from '../Breadcrumbs/Breadcrumbs';

import { NavWrapper } from './Navbar.style';

type PropTypes = {
  links: CrumbsType;
};
const Navbar: React.FunctionComponent<PropTypes> = ({ links }) => (
  <NavWrapper>
    <Breadcrumbs crumbs={links} />
  </NavWrapper>
);

export default Navbar;
