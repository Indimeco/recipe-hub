//TODO
// Fix react key errors
// Add styled components
// Add redux
// Control data storage for user
// Add method for adding recipes

// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Functionality
import * as utils from './utils.js';
// Components
import Banner from './components/Banner';
import Nav from './components/Navbar';
import Footer from './components/Footer';
import RecipeItem from './components/RecipeItem';

class App extends React.Component {
	render() { return (
		<div>
			<Banner/>
			<Nav/>
			<section id='#recipes'>
				{Object.keys(this.props.book).map(
					recipe => <RecipeItem
						name={recipe} 
						link={recipe['recipe source']}
						preview={this.props.book[recipe]['preview image']}
						/>
					)
				}
			</section>
			
			<Footer/>
		</div>
	)	}
}

ReactDOM.render(
	<App book={utils.getData().myBook}/>,
	document.getElementById('root')
);