import React from 'react';

export default class Person extends React.Component {

	render() {
		return (
			<div className="person-container">
				<h1>Hello, my name is {this.props.name}</h1>
				<p>I am {this.props.age} years old</p>
			</div>
		);
	}

}