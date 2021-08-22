import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import React, { useState } from 'react';

const App = props => {
    const [ personsState, setPersonsState] = useState({
      persons:[
        { name: 'Maxi', age: 28 },
        { name: 'Mary', age: 48 },
        { name: 'Sindralla', age: 24 }
      ],
      otherstates: 'Some Other States'
    });
    const [otherState, setOtherState] = useState('Another value');
    console.log(personsState,otherState);
    const buttonClickHandler = () => {
      // console.log("Cliked the button :) ");
      // Don't Do This ---> personsState.persons[0].name = "Maxi williams";
      setPersonsState({
        persons:[
          { name: 'Maxi Williams', age: 28 },
          { name: 'Mary', age: 48 },
          { name: 'Sindralla', age: 21 }
        ],
        otherstates: 'Some Other States'
      });
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age}></Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> :)</Person>
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age}></Person>
          <button onClick={buttonClickHandler}>
            Learn React
          </button>
        </header>
      </div>
    );
  }



export default App;
