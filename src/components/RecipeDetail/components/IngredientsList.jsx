import React from 'react';

export const IngredientsList = ({ ingredients, className, ...restProps }) => {
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

export default IngredientsList;
