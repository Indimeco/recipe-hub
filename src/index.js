import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
	render() { return (
		<div>
			<Banner/>
			<Nav/>
			
			<section id='#recipes'>
				<h2>App here</h2>
			</section>
			
			<Footer/>
		</div>
	)	}
}

ReactDOM.render(
	<App/>,
	document.getElementById('root')
);