import React from 'react';
import styled from 'styled-components';
import componentStyle from './Filter.style';
import Input from '../Input/Input';
import withColor from '../../hocs/withColor';

const Search = styled(Input)``;

class Filter extends React.Component {
  render() {
    const { className, color, ...restProps } = this.props;
    return (
      <div className={className} {...restProps}>
        <Input className="Filter__sort" placeholder="Sort by..." />
        <Input color={color} className="Filter__tag" placeholder="Add tag..." />
        <Search color={color} placeholder="Search..." />
      </div>
    );
  }
}

export default withColor(
  styled(Filter)`
    ${componentStyle}
  `
);
