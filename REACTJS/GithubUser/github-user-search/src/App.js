import logo from './logo.svg';
import './App.css';
import './style.css';
import Form  from './components/Form/form.js'
import { useState } from "react";

const API_URL = "https://api.github.com";

async function fetchResults(query){
	try{
		const response = await fetch(`${API_URL}/search/users?q=${query}`);
		const json = await response.json();
		return json.items || [];
	} catch (e){
		throw new Error(e);
	}
}

function App() {
	
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	
	function onSearchChange(e){
		setQuery(e.target.value);
	}
	
	async function onSearchSubmit(e){
		e.preventDefault();
		const results = await fetchResults(query);
		setResults(results);
	}
	
	function User({ avatar, url, username,repo }) {
	  return (
		<div className="user">
		  <img src={avatar} alt="Profile" width="50" height="50" />
		  <a href={url} target="_blank" rel="noopener noreferrer">
			{username}
		  </a>
				<button id="repo_details" onClick={fetchRepo(repo)}>Repository Details</button>

		</div>
	  );
	}

	 async function fetchRepo(repo){
			// const repo_details = await fetch(`${repo}`);
			// console.log(repo_details);
			console.log("test");
	}
	
	return (
    <div className="App">
      <Form
		onChange={onSearchChange}
		onSubmit={onSearchSubmit}
	  />
	  <h3>Results</h3>
        <div id="results">
          <div>
            {results.map((user) => (
              <User
                key={user.login}
                avatar={user.avatar_url}
                url={user.html_url}
                username={user.login}
																repo = {user.repos_url}
              />
            ))}
          </div>
		</div>
    </div>
  );
}

export default App;
