import React,{SyntheticEvent} from "react";

type ButtonProps = {
	text : string;
	type?: 'button' | 'submit';
	onClick?: (e: SyntheticEvent) => void;
};

function Button({onClick, text, type = 'button'}:ButtonProps){
	return (
				<button
				className="px-4 py-2 bg-blue-600 border border-blue-700 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md !important"
				onClick={onClick}
				type={type}
				>
					{text}
				</button>
	);
}

export default Button;