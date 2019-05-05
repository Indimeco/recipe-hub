import React from 'react';
import styled from 'styled-components';
import componentStyle from './Form.style';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Heading from '../Heading/Heading';
import Button from '../Button/Button';
import withColor, { ColorProvider } from '../../hocs/withColor';

class FormWrapper extends React.Component {
	render() {
		const { className, color, ...restProps } = this.props;
		return (
			<ColorProvider.Provider value={color}>
				<div className={className}>
					<Form color={color} />
				</div>
			</ColorProvider.Provider>
		);
	}
}

const Form = withColor(
	class FormContents extends React.Component {
		render() {
			const { className, color, ...restProps } = this.props;
			return (
        <>
          <Heading el="h2">New Recipe</Heading>
          <label>
            Recipe Name
          	<Input placeHolder="Recipe Name" />
          </label>
          <label>
            Preview Image
          	<Input placeHolder="Preview Image" />
          </label>
          <label>
            Recipe Source
          	<Input placeHolder="Recipe Source" />
          </label>
          <label>
            Ingredients
          	<Textarea placeHolder="Ingredients" />
          </label>
          <label>
            Recipe
          	<Textarea placeHolder="Recipe" />
          </label>
          <label>
            Cook Time
          	<Input placeHolder="Cook Time" />
          </label>
          <label>
            Method
          	<Input placeHolder="Method" />
          </label>
          <label>
            Tags
          	<Textarea placeHolder="Tags" />
          </label>
          <Button type="Submit">Save</Button>
        </>
			);
		}
	}
);

export default withColor(
	styled(FormWrapper)`
    ${componentStyle}
  `
);
