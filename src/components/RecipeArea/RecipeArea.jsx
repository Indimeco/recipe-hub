import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
					{Object.keys(book.recipes).map(index => {
						const recipe = book.recipes[index];
						return (
							<RecipeItem
								color={color}
								key={`recipe${index}`}
								name={recipe.name.value}
								link={`/view/${recipe.id}`}
								preview={recipe.previewImage.value}
							/>
						);
					})}
				</div>
			</section>
		);
	}
}

RecipeArea.propTypes = {
	color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	book: PropTypes.object,
	className: PropTypes.string,
};

export default withColor(
	styled(RecipeArea)`
    ${componentStyle}
  `
);
