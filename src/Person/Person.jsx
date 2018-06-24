import React from 'react';
import Radium from 'radium';

import './Person.css';

const Person = ( props ) => {
	const style = {
		'@media (max-width: 550px)': {
			width: '90%'
		}
	};

	return (
		<div className="Person" style={style}>
			<h1 onClick={props.clicked}>
				Hello, my name is: <span>{props.name}</span>
			</h1>
			<p>I am {props.age} years old</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
}

export default Radium(Person);