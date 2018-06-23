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
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
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
