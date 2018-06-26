import React from 'react';

import './Char.css';

const CharComponent = (props) => {
	return (
		<div className="char-container">
			<h1 onClick={props.clicked}>
				{ props.character === ' ' ? '-' : props.character }
			</h1>
		</div>
	);
}

export default CharComponent;