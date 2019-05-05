import React from 'react';
import styled from 'styled-components';
import withColor from '../../hocs/withColor';
import { recipeDetailStyle, recipeIntroStyle } from './RecipeDetail.style.js';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';

const CookTime = ({ active, ready, className, ...restProps }) => {
	return (
		<span className={className}>
			{active} + {ready} = {active + ready}
		</span>
	);
};

const IngredientsList = ({ ingredients, className, ...restProps }) => {
	return (
		<div className={className}>
			<ul>
				{Object.keys(ingredients).map(x => (
					<li key={`recipes${x}`}>
						{`${ingredients[x].quantity}${ingredients[x].unit} ${x}`}
					</li>
				))}
			</ul>
		</div>
	);
};

const RecipeDirections = ({ directions, ...restProps }) => {
	return (
		<div>
			{directions ? (
				directions.split('\n').map((x, y) => <p key={'directions' + y}>{x}</p>)
			) : (
				<p>No directions needed? No problem!</p>
			)}
		</div>
	);
};

const RecipeIntro = styled.div`
  ${recipeIntroStyle}
`;

class RecipeDetail extends React.Component {
	render() {
		const { className, match, book, color, ...restProps } = this.props;
		const recipe = book.recipes[match.params.name];

		return (
			<div className={className}>
				<RecipeIntro color={color}>
					<Heading el="h2">{recipe.name}</Heading>
					<CookTime
						active={recipe['active time']}
						ready={recipe['ready time']}
					/>
					<Image src={recipe['preview image']} />
					<IngredientsList ingredients={recipe.ingredients} />
				</RecipeIntro>
				<RecipeDirections directions={recipe.directions} />
			</div>
		);
	}
}

export default withColor(
	styled(RecipeDetail)`
    ${recipeDetailStyle}
  `
);
