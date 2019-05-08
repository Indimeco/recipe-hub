import React from 'react';

export const RecipeDirections = ({ directions, ...restProps }) => {
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

export default RecipeDirections;
