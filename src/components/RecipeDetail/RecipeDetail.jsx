import React from 'react';
import styled from 'styled-components';
import withColor from '../../hocs/withColor';
import { recipeDetailStyle, recipeIntroStyle, timeBoxStyle, timeBoxItemStyle } from './RecipeDetail.style.js';
import Heading from '../../components/Heading/Heading';
import Image from '../../components/Image/Image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faRunning,
	faHourglass,
	faEquals,
	faPlus
} from '@fortawesome/free-solid-svg-icons';

const TimeBox = styled.span`${timeBoxStyle}`;

const CookTime = withColor(({ active, ready, className, color, ...restProps }) => {
	const getTime = (time) => {
		const hours = Math.round(time / 60);
		const remainder = Math.round(time % 60);

		return `${hours ? hours + 'hr' : ''}${hours && remainder ? ' ' : ''}${remainder ? remainder + 'm' : ''}`;
	};

	return (
		<TimeBox className={className} color={color} {...restProps}>
			<FontAwesomeIcon icon={faClock} />{getTime(active + ready)}
			<FontAwesomeIcon icon={faEquals} />
			<FontAwesomeIcon icon={faRunning} />{getTime(active)}
			<FontAwesomeIcon icon={faPlus} />
			<FontAwesomeIcon icon={faHourglass} />{getTime(ready)}
		</TimeBox>
	);
});

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
						color="main"
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
