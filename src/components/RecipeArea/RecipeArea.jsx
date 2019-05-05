import React from 'react';
import styled from 'styled-components';
import componentStyle from './RecipeArea.style';
import RecipeItem from '../RecipeItem/RecipeItem';
import Heading from '../Heading/Heading';
import Filter from '../Filter/Filter';
import withColor from '../../hocs/withColor';

class RecipeArea extends React.Component {
	render() {
		const { className, color, book } = this.props;
		return (
			<section className={className}>
				<Heading el="h2">{book.meta.name}</Heading>
				<Filter color="main" />
				<div className="recipe-list">
					{Object.keys(book.recipes).map(recipe => {
						return (
							<RecipeItem
								color={color}
								key={recipe}
								name={book.recipes[recipe]['name']}
								link={`/view/${recipe}`}
								preview={book.recipes[recipe]['preview image']}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

export default withColor(
	styled(RecipeArea)`
    ${componentStyle}
  `
);
