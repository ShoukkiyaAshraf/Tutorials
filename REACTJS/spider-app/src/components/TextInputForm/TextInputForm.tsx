import React,{ChangeEvent,FormEvent,useState,SyntheticEvent} from "react";
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";

type TextInputFormProps = {
	onSubmit?: (text:string) => void
}

function TextInputForm({onSubmit}:TextInputFormProps){

	const [value,setValue] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value || '';
		console.log(value);
		setValue(value);
	}

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit?.(value);
	}

const handleClear = (e: SyntheticEvent) => {
	e.preventDefault();
	setValue('');
}

	return(
		<form className="flex" onSubmit={handleSubmit}>
			<div className="flex-1 mr-2">
				<TextInput 
				onChange={handleChange}
				label="Enter a phase or a word" 
				value={value}
				type="password"/>
			</div>
			<div className="flex-initial">
				<Button type="submit" text="Ok"/>
			</div>
			<div className="flex-initial">
				<Button type="button" text="clear" onClick={handleClear}/>
			</div>
		</form>
	);
}

export default TextInputForm;