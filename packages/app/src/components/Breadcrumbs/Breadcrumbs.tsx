import React from 'react';

import { CrumbContainer, Crumb } from './Breadcrumbs.style';

type PropTypes = {
  crumbs: { name: string; path?: string | null }[];
};

const Breadcrumbs: React.FunctionComponent<PropTypes> = ({ crumbs }) => (
  <CrumbContainer>
    {crumbs.map(({ name, path }, index) => {
      return (
        <span key={`Breadcrumb-${path}`}>
          {index !== 0 && <span>> </span>}
          {path ? <Crumb to={path}>{name}</Crumb> : <span>{name}</span>}
        </span>
      );
    })}
  </CrumbContainer>
);

export default Breadcrumbs;
