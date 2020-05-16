import React from 'react';

import { CrumbContainer, Crumb } from './Breadcrumbs.style';

export type CrumbsType = { name: string; path?: string | null }[];
type PropTypes = {
  crumbs: CrumbsType;
};

const Breadcrumbs: React.FunctionComponent<PropTypes> = ({ crumbs }) => (
  <CrumbContainer>
    {crumbs?.map(({ name, path }, index) => {
      return (
        <li key={`Breadcrumb-${path}`}>
          {index !== 0 && <span>> </span>}
          {path ? (
            <Crumb to={path} invertStyle>
              {name}
            </Crumb>
          ) : (
            <span>{name}</span>
          )}
        </li>
      );
    })}
  </CrumbContainer>
);

export default Breadcrumbs;
