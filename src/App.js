import React, { Component } from 'react';


import './App.css';
import Person from './Person/Person';

//import UserInput from './UserInput/UserInput'
//import UserOutput from './UserOutput/UserOutput';



class App extends Component {
  state = {
    persons: [
      {id: 'fdgdsf', name: 'James', age: 32},
      {id: 'hergy', name: 'Anslee', age: 18},
      {id: 'fghjdf', name: 'Dawson', age: 21}
    ],
    otherState: 'Some Other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div> 
      );

      style.backgroundColor = 'red';
    }

    let classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold')
    }

    

    return (
      <div className="App">
        <h1>Hi, I'm a react app!</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <button className='button' onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button> 
        {persons}               
      </div>
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
