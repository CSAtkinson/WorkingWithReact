import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = props => {  
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: 'James', age: 32},
      {name: 'Anslee', age: 18},
      {name: 'Dawson', age: 21}
    ],
    otherState: 'Some other value'
  });

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        {name: 'Bornforexile', age: 32},
        {name: 'Anslee', age: 25},
        {name: 'Dawson', age: 21}
      ]
    })
  }

    return (
      <div className="App">
       <h1>Hi, I'm a react app!</h1>
       <p>This is really working!</p>
       <button onClick={switchNameHandler}>Switch Name</button>
       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>I am a freckled Firecracker</Person>
       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );

    //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this work now?'))
  }


export default App;




