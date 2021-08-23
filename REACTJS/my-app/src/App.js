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
    otherstates: 'Some Other States',
    showPerson : false
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

  nameChangeHandler = (event) => {
    this.setState({
      persons:[
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 48 },
        { name: 'Sindralla', age: 21 }
      ]
    });
  }

  togglePersonHandler = () => {
    const showTemp = this.state.showPerson;
    this.setState({showPerson: !showTemp});
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.showPerson ? <div>
          <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}>
          </Person>
          <Person 
            click={this.buttonClickHandler.bind(this,'miniii!!!')} 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.nameChangeHandler}
            > :)
          </Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}>           
          </Person>
          </div> : null
          }
          <button 
            style = {style}
            onClick={this.togglePersonHandler}>
            Learn React
          </button>
        </header>
      </div>
    );
  };
}


export default App;
