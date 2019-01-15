import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import './index.css';
import * as serviceWorker from './serviceWorker';

import NavBar from './components/navbar';
import Cover from './components/cover';
import Container from './components/container';
import Footer from './components/footer';

const characters = ['pokemon-01', 'pokemon-02', 'pokemon-03', 'pokemon-04', 'pokemon-05', 'pokemon-06', 'pokemon-07', 'pokemon-08', 'pokemon-09', 'pokemon-10', 'pokemon-11', 'pokemon-12',];

const colors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime',];

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			info: 'Click an image to begin!',
			score: 0,
			topScore: 0,
			characters: characters,
			selectedCharacters: []
		};
	};

	shuffleCharacters() {
		this.setState({ characters: _.shuffle(characters) });
	};

	topScoreUpdater(currentScore, currentTopScore, name) {
		currentScore++;
		_.delay(() => {
			this.setState({ info: 'Choose your next character!' });
		}, 500);
		if (currentScore >= currentTopScore) {
			return this.setState({ score: currentScore, topScore: currentScore, info: `${name} (Correct!)` });
		};
		return this.setState({ score: currentScore, info: `${name} (Correct!)` });
	};

	checkForDuplicate(name) {
		if (this.state.selectedCharacters.indexOf(name) === -1) {
			this.state.selectedCharacters.push(name);
			this.topScoreUpdater(this.state.score, this.state.topScore, name);
			if (this.state.selectedCharacters.length === characters.length) {
				this.setState({ selectedCharacters: [] });
			};
		} else {
			_.delay(() => {
				this.setState({ info: 'Try Again!' });
			}, 500);
			this.setState({ score: 0, selectedCharacters: [], info: `${name} (Duplicate)!` });
		}
		this.shuffleCharacters();
	};

	handleSelectCharacters(name) {
		this.checkForDuplicate(name);
	};

	render() {
		return (
			<div>
				<NavBar
					score={this.state.score}
					topScore={this.state.topScore}
					message={this.state.info}
				/>
				<Cover />
				<div className="row"></div>
				<Container
					colors={colors}
					characters={this.state.characters}
					onImageClick={name => { this.handleSelectCharacters(name) }}
				/>
				<Footer />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
