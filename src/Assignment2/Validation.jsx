import React from 'react';

const Validation = (props) => {
	let feedback = <p className="text-small text-danger"><small>Text too short!</small></p>;

	if (props.textLength > 5) {
		feedback = <p className="text-small text-success"><small>Text long enough.</small></p>;
	}

	return (
		feedback
	);
}

export default Validation;