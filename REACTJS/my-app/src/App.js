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

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons : persons});
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

    let person = null;

    if(this.state.showPerson){
      person = (
          <div>
            {
              this.state.persons.map( (aperson,index) => {
                return <Person 
                click = { () => this.deletePersonHandler(index)}
                name= {aperson.name}
                age = {aperson.age}/>
              })
            }
          </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {person}
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
