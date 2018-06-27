import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
	constructor(props) {
		super(props);
		console.log('[Persons.js] Inside constructor', props);
	}

	componentWillMount() {
		console.log('[Persons.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Persons.js] Inside componentDidMount()');
	}

	componentWillUnmount() {
		console.log('[Persons.js] Inside componentWillUnmount()');
	}

	render() {
		console.log('[Persons.js] Inside render()');
		return this.props.persons.map((person, index) => {
			return <Person
				key={person.username}
				name={person.name}
				age={person.age}
				clicked={() => this.props.clicked(index)}
				changed={(event) => this.props.changed(event, person.username)}
			/>
		});
	}
}

export default Persons;