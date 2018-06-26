import React from 'react';

import styles from './Cockpit.css';

const Cockpit = (props) => {
	let btnClass = '';
	if ( props.showPersons ) {
		btnClass = styles.Red;
	}

	const quoteClasses = [styles.intro];
    if (props.persons.length <= 2) {
      quoteClasses.push(styles.red);
      if (props.persons.length <= 1) {
        quoteClasses.push(styles.bold);
      }
    }

	return (
		<div className={styles.Cockpit}>
			<p className={quoteClasses.join(' ')}>"Focus. Be Yourself. Be Positive. Smile. You Can Do It." :)</p>
			<button 
				className={btnClass} 
				onClick={props.btnClicked}>Toggle Persons</button>
		</div>
	);
};

export default Cockpit;