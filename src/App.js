import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'James', age: 32},
      {name: 'Anslee', age: 18},
      {name: 'Dawson', age: 21}
    ],
    otherState: 'Some Other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 32},
        {name: 'Anslee', age: 25},
        {name: 'Dawson', age: 21}
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {name: 'James', age: 32},
        {name:  event.target.value, age: 18},
        {name: 'Dawson', age: 21}
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    }


    return (
      <div className="App">
       <h1>Hi, I'm a react app!</h1>
       <p>This is really working!</p>
       <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons
       </button>
          {
            this.state.showPersons ?
              <div>
                <Person 
                  name={this.state.persons[0].name} 
                  age={this.state.persons[0].age}/>
                <Person 
                  name={this.state.persons[1].name} 
                  age={this.state.persons[1].age}
                  click={this.switchNameHandler.bind(this, "Bornforexile@$%^$^$")}
                  changed={this.nameChangedHandler}>I am a freckled Firecracker</Person>
                <Person 
                  name={this.state.persons[2].name} 
                  age={this.state.persons[2].age}/>
              </div> 
            : null
          }       
      </div>
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }
}

export default App;
