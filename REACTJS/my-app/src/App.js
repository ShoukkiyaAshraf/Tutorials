import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import { Component } from 'react';

class App extends Component {
  state = {
    persons:[
      { name: 'Maxi', age: 28 },
      { name: 'Mary', age: 48 },
      { name: 'Sindralla', age: 24 }
    ],
    otherstates: 'Some Other States'
  }

  buttonClickHandler = (newName) => {
    // console.log("Cliked the button :) ");
    // Don't Do This ---> this.state.persons[0].name = "Maxi williams";
    this.setState({
      persons:[
        { name: newName, age: 28 },
        { name: 'Mary', age: 48 },
        { name: 'Sindralla', age: 21 }
      ]
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}></Person>
          <Person click={() => this.buttonClickHandler('Maximillian nnn!!!')} name={this.state.persons[1].name} age={this.state.persons[1].age}> :)</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
          <button onClick={() => this.buttonClickHandler('Maxii!!')}>
            Learn React
          </button>
        </header>
      </div>
    );
  };
}


export default App;
