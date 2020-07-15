import React from 'react';

import Breadcrumbs, { CrumbsType } from '../Breadcrumbs/Breadcrumbs';

import { NavWrapper } from './Navbar.style';

type PropTypes = {
  links: CrumbsType;
};
export const Navbar: React.FunctionComponent<PropTypes> = ({ links }) => (
  <NavWrapper data-testid="navigation">
    <Breadcrumbs crumbs={links} />
  </NavWrapper>
);

export default Navbar;
