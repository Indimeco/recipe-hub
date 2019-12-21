import React from 'react';
import styled from 'styled-components';

import Input from '../Input/Input';
import withColor from '../../hocs/withColor';

import componentStyle from './Filter.style';

const Search = styled(Input)``;

class Filter extends React.Component {
  render() {
    const { className, color, ...restProps } = this.props;
    return (
      <div className={className} {...restProps}>
        <Input color="root" className="Filter__sort" placeholder="Sort by..." />
        <Input color="root" className="Filter__tag" placeholder="Add tag..." />
        <Search color="root" placeholder="Search..." />
      </div>
    );
  }
}

export default withColor(
  styled(Filter)`
    ${componentStyle}
  `,
);