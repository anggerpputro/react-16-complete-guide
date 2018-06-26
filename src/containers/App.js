import React, { Component } from 'react';
import logo from '../logo.svg';
import AppStyles from './App.css';

import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';

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
    let persons = null;
    if ( this.state.showPersons ) {
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangeHandler}
        />;
    }

    return (
        <div className={AppStyles.App}>
          <header className={AppStyles['App-header']}>
            <img src={logo} className={AppStyles['App-logo']} alt="logo" />
            <h1 className={AppStyles['App-title']}>Welcome to React</h1>
          </header>
          <p className={AppStyles['App-intro']}>
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>

          <main>
            <Cockpit 
              showPersons={this.state.showPersons} 
              persons={this.state.persons} 
              btnClicked={this.togglePersonsHandler} />
            { persons }
          </main>
        </div>
    );
  }
}

export default App;
