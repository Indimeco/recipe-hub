import React from 'react';
import styled from 'styled-components';
import withColor from '../../hocs/withColor';
import { recipeDetailStyle, recipeIntroStyle } from './RecipeDetail.style.js';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';
import CookTime from './components/CookTime';
import IngredientsList from './components/IngredientsList';
import RecipeDirections from './components/RecipeDirections';
import PropTypes from 'prop-types';

const RecipeIntro = styled.div`
  ${recipeIntroStyle}
`;

class RecipeDetail extends React.Component {
	render() {
		const { match, book, color, ...restProps } = this.props;
		const recipe = book.recipes[match.params.name];

		return (
			<div {...restProps}>
				<RecipeIntro color={color}>
					<Heading el="h2">{recipe.name}</Heading>
					<CookTime
						color="main"
						active={recipe['active time']}
						waiting={recipe['waiting time']}
					/>
					<Image src={recipe['preview image']} />
					<IngredientsList ingredients={recipe.ingredients} />
				</RecipeIntro>
				<RecipeDirections directions={recipe.directions} />
			</div>
		);
	}
}

RecipeDetail.propTypes = {
	className: PropTypes.string,
	match: PropTypes.object,
	book: PropTypes.object,
	color: PropTypes.object,
};

export default withColor(
	styled(RecipeDetail)`
    ${recipeDetailStyle}
  `
);
