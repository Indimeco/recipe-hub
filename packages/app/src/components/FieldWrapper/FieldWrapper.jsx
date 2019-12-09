import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import withColor from '../../hocs/withColor';

import { wrapperStyle, labelStyle } from './FieldWrapper.style';

const Wrapper = styled.div`
  ${wrapperStyle}
`;
const Label = styled.div`
  ${labelStyle}
`;

const randomId = length => {
  return [...Array(length)].map(() => Math.random().toString(36)[2]).join('');
};

const FieldWrapper = ({ color, label, children, inline, ...restProps }) => {
  const isOnly = React.Children.only(children);

  const id = `${randomId(6)}-${children.props.name}`;
  const Clone = isOnly ? React.cloneElement(children, { id }) : null;

  const wrapperProps = { inline, ...restProps };
  const labelProps = { htmlFor: id, inline, color };

  // Reverse order of Clone/Label
  return inline ? (
    <Wrapper as={Clone.isGroupedFormField ? 'fieldset' : 'div'} {...wrapperProps}>
      {Clone}
      <Label as={Clone.isGroupedFormField ? 'legend' : 'label'} {...labelProps}>
        {label}
      </Label>
    </Wrapper>
  ) : (
    <Wrapper as={Clone.isGroupedFormField ? 'fieldset' : 'div'} {...wrapperProps}>
      <Label as={Clone.isGroupedFormField ? 'legend' : 'label'} {...labelProps}>
        {label}
      </Label>
      {Clone}
    </Wrapper>
  );
};

FieldWrapper.propTypes = {
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  label: PropTypes.string,
  children: PropTypes.object,
  inline: PropTypes.bool,
};

export default withColor(FieldWrapper);
