import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Angger Priyardhan Putro', age: 24},
      {name: 'Angie Priyardhan Prita Dewi', age: 19},
      {name: 'Angelina Priyardhan Putri', age: 9},
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

  render() {
    const btnStyle = {
      padding: '8px',
      cursor: 'pointer',
      border: '1px solid blue',
      background: 'white'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click={() => this.deletePersonHandler(index)}
              name={person.name} 
              age={person.age} />
          })}
        </div>
      );
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
          <button style={btnStyle} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          { persons }
        </main>
      </div>
    );
  }
}

export default App;
