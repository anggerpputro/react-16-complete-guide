import React from 'react';

import PersonStyle from './Person.css';

class Person extends React.Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside constructor', props);
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}

	componentWillUnmount() {
		console.log('[Person.js] Inside componentWillUnmount()');
	}

	render() {
		console.log('[Person.js] Inside render()');
		return (
			<div className={PersonStyle.Person}>
				<h1 onClick={this.props.clicked}>
					Hello, my name is: <span>{this.props.name}</span>
				</h1>
				<p>I am {this.props.age} years old</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
		);
	}
}

export default Person;