import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import componentStyle from './App.style';

import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import RecipeArea from '../../components/RecipeArea/RecipeArea';
import Form from '../../components/Form/Form';
import RecipeDetail from '../RecipeDetail/RecipeDetail';
import ErrorPage from '../ErrorPage/ErrorPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import withColor from '../../hocs/withColor';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { book: null };
	}

	async componentDidMount() {
		const response = await fetch(`/api/books/${this.props.bookId}`);
		const book = await response.json();
		this.setState({ book: book });
	}

	render() {
		const { className } = this.props;
		return (
			<Router>
				<div className={className}>
					<Navbar
						color="aux"
						banner={
							<Banner color="main" el="h1">
								Recipe Hub
							</Banner>
						}
					/>
					<div className="content">
						<Switch>
							<Route
								path="/"
								exact
								render={() => this.state.book ? <RecipeArea book={this.state.book} color="main" /> : 'Loading...'}
							/>

							<Route path="/new" render={() => <Form color="main" />} />

							<Route
								path="/view/:name"
								render={ ({match}) => (
									this.state.book ? <RecipeDetail match={match} book={this.state.book} color="root" /> : 'Loading...'
								)}
							/>

							<Route
								render={() => <ErrorPage/>}
							/>
						</Switch>
					</div>
					<Footer color="aux" />
				</div>
			</Router>
		);
	}
}

App.propTypes = {
	bookId: PropTypes.string,
	className: PropTypes.string
};

export default withColor(
	styled(App)`
    ${componentStyle}
  `
);
