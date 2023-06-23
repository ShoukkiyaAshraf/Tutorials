import React from "react";


function Form({onChange,onSubmit}){
	return(
		<form id="git-user-form" onSubmit={onSubmit}>
			<label for="search-input">
			Enter the user:
			</label>
			<input
				id="search-input"
				class="search-input"
				onChange={onChange}
			/>
			<button id="search-button" type="submit">
			Search
			</button>
		</form>
	);
}

export default Form;