import React from 'react';
import styled from 'styled-components';
import componentStyle from './Form.style';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Fieldset from '../Fieldset/Fieldset';
import FieldWrapper from '../FieldWrapper/FieldWrapper';
import Button from '../Button/Button';
import withColor from '../../hocs/withColor';

class RecipeItemControls extends React.Component {
  render() {
    const { className, color, ...restProps } = this.props;
    return (
      <div className={className}>
        <Fieldset label="New Recipe">
          <FieldWrapper label="Recipe Name">
            <Input placeHolder="Recipe Name" />
          </FieldWrapper>

          <FieldWrapper label="Preview Image">
            <Input placeHolder="Preview Image" />
          </FieldWrapper>

          <FieldWrapper label="Recipe Source">
            <Input placeHolder="Recipe Source" />
          </FieldWrapper>

          <FieldWrapper label="Ingredients">
            <Textarea placeHolder="Ingredients" />
          </FieldWrapper>

          <FieldWrapper label="Recipe">
            <Textarea placeHolder="Recipe" />
          </FieldWrapper>

          <FieldWrapper label="Cook Time">
            <Input placeHolder="Cook Time" />
          </FieldWrapper>

          <FieldWrapper label="Method">
            <Input placeHolder="Method" />
          </FieldWrapper>

          <FieldWrapper label="Tags">
            <Textarea placeHolder="Tags" />
          </FieldWrapper>

          <Button>Save</Button>
        </Fieldset>
      </div>
    );
  }
}

export default withColor(
  styled(RecipeItemControls)`
    ${componentStyle}
  `
);
