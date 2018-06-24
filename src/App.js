import React, { Component } from 'react';
import Radium from 'radium';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {username: 'anggerpputro', name: 'Angger Priyardhan Putro', age: 24},
      {username: 'angieprita', name: 'Angie Priyardhan Prita Dewi', age: 19},
      {username: 'angelinapputri', name: 'Angelina Priyardhan Putri', age: 9},
    ],
    showPersons: false
  }

  togglePersonsHandler = () => {
    const showed = this.state.showPersons;
    this.setState({showPersons: !showed});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); // slice dengan parameter kosong hanya untuk copy original data ke variable baru
    const persons = [...this.state.persons]; // atau pakai ES6 syntax
    // cara ini lebih direkomendasikan, jadi jangan langsung update original data tapi lebih baik copy dulu baru diupdate
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  nameChangeHandler = (event, id) => {
    // get component value yang diketikkan user
    const newName = event.target.value;

    // update data object person yang dimaksud
    const personIndex = this.state.persons.findIndex(p => {
      return p.username === id;
    });
    const newPerson = {...this.state.persons[personIndex]};
    newPerson.name = newName;

    // masukkan object baru tadi ke dalam list persons
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = newPerson;

    // update state persons
    this.setState({persons: newPersons});
  }

  render() {
    const btnStyle = {
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid blue',
      backgroundColor: 'green',
      color: 'white',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'blue'
      }
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.username}
              name={person.name} 
              age={person.age} 
              clicked={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.username)}
              />
          })}
        </div>
      );

      btnStyle.backgroundColor = 'red';
      btnStyle.border = '1px solid yellow';
      btnStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'yellow'
      };
    }

    const quoteClasses = ['App-intro'];
    if (this.state.persons.length <= 2) {
      quoteClasses.push('red');
      if (this.state.persons.length <= 1) {
        quoteClasses.push('bold');
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <main>
          <p className={quoteClasses.join(' ')}>"Focus. Be Yourself. Be Positive. Smile. You Can Do It." :)</p>
          <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </main>
      </div>
    );
  }
}

export default Radium(App);
