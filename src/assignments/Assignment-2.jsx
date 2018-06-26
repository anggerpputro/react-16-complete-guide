import React, {Component} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

import Validation from './Assignment2/Validation';
import CharComponent from './Assignment2/Char';

export default class Assignment2 extends Component {

	state = {
		userInput: '',
		chars: []
	};

	userInputChangeHandler = (event) => {
		// get user input
		const text = event.target.value;

		// split user input into chars array
		const chars = text.split('');

		// update state
		this.setState({
			userInput: text,
			chars: chars
		});
	}

	deleteCharHandler = (charIndex) => {
		// copy chars state
		const newChars = [...this.state.chars];
		// splice chars berdasarkan index
		newChars.splice(charIndex, 1);

		// create new user input
		const newUserInput = newChars.join('');

		// update state
		this.setState({
			userInput: newUserInput,
			chars: newChars
		});
	}

	render() {
		let chars = null;
		if (this.state.chars.length > 0) {
			chars = this.state.chars.map((char, index) => {
				return <CharComponent
					key={index}
					character={char}
					clicked={() => this.deleteCharHandler(index)}
					/>
			});
		}

		return (
			<div id="assignment-2-container" className="container">
				<header>
					<h1 className="text-center">Assignment 2</h1>
				</header>

				<main>
					<Form>
						<FormGroup>
							<Label for="userInput">Input:</Label>
							<Input 
								type="text" 
								name="input" 
								id="userInput" 
								placeholder="silahkan masukkan text"
								value={this.state.userInput}
								onChange={(event) => this.userInputChangeHandler(event)} 
								/>
							<Validation textLength={this.state.userInput.length} />
						</FormGroup>
					</Form>

					{chars}
				</main>
			</div>
		);
	}

}