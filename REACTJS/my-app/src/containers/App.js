import logo from './logo.svg';
import './App.css';
import Person from '../components/Persons/Person/Person';
import { Component } from 'react';
import styled from 'styled-components';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const StyledButton = styled.button`
                        background-color: ${props => props.alt ? 'red' : 'green'};
                        color: white;
                        font: inherit;
                        border: 3px solid blue;
                        padding: 8px;
                        cursor: pointer;

                        &:hover{
                          background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
                          color: black;
                        }
                        `;

class App extends Component {
  state = {
    persons:[
      { id: 'asdf', name: 'Maxi', age: 28 },
      { id: 'zcvb', name: 'Mary', age: 48 },
      { id: 'qwer', name: 'Sindralla', age: 24 }
    ],
    otherstates: 'Some Other States',
    showPerson : false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons : persons});
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons : persons});
  }

  togglePersonHandler = () => {
    const showTemp = this.state.showPerson;
    this.setState({showPerson: !showTemp});
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '3px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let person = null;

    if(this.state.showPerson){
      person = (
          <div>
            {
              this.state.persons.map( (aperson,index) => {
                return <ErrorBoundary key={aperson.id}>
                  <Person 
                click = { () => this.deletePersonHandler(index)}
                name= {aperson.name}
                age = {aperson.age}
                key = {aperson.id} 
                changed = { (event) => this.nameChangeHandler(event, aperson.id)}/></ErrorBoundary>
              })
            }
          </div>
      );

      // style.backgroundColor = 'red';
    }

    const classes = [];
    if(this.state.persons.length <= 2){
       classes.push('red'); //classes = ['red']
    }
    if(this.state.persons.length <= 1){
      classes.push('bold') //classes = ['red','bold']
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className={classes.join(' ')}>This is really cool..!!</p>
          <StyledButton
            alt = {this.state.showPerson}
            onClick={this.togglePersonHandler}>
            Learn React
            </StyledButton>
          {person}
        </header>
      </div>
    );
  };
}


export default App;