import React from 'react';

import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
	return <Person 
	  key={person.username}
	  name={person.name} 
	  age={person.age} 
	  clicked={() => props.clicked(index)}
	  changed={(event) => props.changed(event, person.username)}
	  />
  });

export default Persons;