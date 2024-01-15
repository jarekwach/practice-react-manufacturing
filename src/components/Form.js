import React, { useState } from 'react';

const Form = () => {
	const [textInput, setTextInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(textInput);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label></label>
			<input
				type='text'
				value={textInput}
				onChange={(e) => setTextInput(e.target.value)}
				placeholder='GitHub login'
			/>
			<button type='submit'>Wyślij</button>
		</form>
	);
};

export default Form;
