import React from 'react';

import PersonStyle from './Person.css';

const Person = ( props ) => {
	return (
		<div className={PersonStyle.Person}>
			<h1 onClick={props.clicked}>
				Hello, my name is: <span>{props.name}</span>
			</h1>
			<p>I am {props.age} years old</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default Person;