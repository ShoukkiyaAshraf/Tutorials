import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aloo <code>React :)</code> ..
        </p>
        <Person name="Max" age="28"></Person>
        <Person name="Mary" age="48">My hobbies are racing !!</Person>
        <Person name="Sindralla" age="8"></Person>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
