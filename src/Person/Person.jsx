import React from 'react';

import './Person.css';

const Person = ( props ) => {
	return (
		<div className="person-container">
			<h1 onClick={props.click}>
				Hello, my name is: <span>{props.name}</span>
			</h1>
			<p>I am {props.age} years old</p>
		</div>
	);
}

export default Person;