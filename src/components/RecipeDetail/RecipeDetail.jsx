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

const RecipeWrapper = styled.div`${recipeDetailStyle}`;

class RecipeDetail extends React.Component {
	render() {
		const { match, book, color } = this.props;
		const recipe = book.recipes[match.params.name];

		return (
			<RecipeWrapper color={color}>
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
			</RecipeWrapper>
		);
	}
}

RecipeDetail.propTypes = {
	match: PropTypes.object,
	book: PropTypes.object,
	color: PropTypes.object,
};

export default withColor(RecipeDetail);
