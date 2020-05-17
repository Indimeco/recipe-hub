import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { CrumbContainer, Crumb, CrumbConnector, CrumbAlign } from './Breadcrumbs.style';

export type CrumbsType = { name: string; path?: string | null }[];
type PropTypes = {
  crumbs: CrumbsType;
};

const Breadcrumbs: React.FunctionComponent<PropTypes> = ({ crumbs }) => (
  <CrumbContainer>
    {crumbs?.map(({ name, path }, index) => {
      return (
        <CrumbAlign key={`Breadcrumb-${path}`}>
          {index !== 0 && (
            <CrumbConnector>
              <FontAwesomeIcon icon={faChevronRight} />
            </CrumbConnector>
          )}
          {path ? <Crumb to={path}>{name}</Crumb> : <Crumb inactive>{name}</Crumb>}
        </CrumbAlign>
      );
    })}
  </CrumbContainer>
);

export default Breadcrumbs;
