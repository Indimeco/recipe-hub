import React from 'react';
import styled from 'styled-components';
import componentStyle from './Filter.style';
import Input from '../Input/Input';

const Search = styled(Input)``;

class Filter extends React.Component {
  render() {
    const { className, subTheme, ...restProps } = this.props;
    return (
      <div className={className}>
        <Input className="Filter__sort" placeholder="Sort by..." />
        <Input className="Filter__tag" placeholder="Add tag..." />
        <Search placeholder="Search..." />
      </div>
    );
  }
}

export default styled(Filter)`
  ${componentStyle}
`;
