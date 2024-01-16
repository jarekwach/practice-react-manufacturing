import React, { useState } from 'react';
import getUserRepos from '../getUserRepos';

const Form = () => {
	const [textInput, setTextInput] = useState('');
	const [repoList, setRepoList] = useState([]);
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		setRepoList([]);

		if (textInput === '') {
			setError('Wprowadź nazwę użytkownika');
		} else {
			getUserRepos(textInput)
				.then((repos) => {
					if (repos) {
						console.log(repos);
						setRepoList(repos);
					} else {
						setError('Pobieranie repozytoriów nie powiodło się.');
					}
				})
				.catch((error) => {
					setError(`Wystąpił błąd: ${error}`);
				});

			setTextInput('');
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor='ghLogin'>Sprawdź repozytoria użytkownika: </label>
				<input
					id='ghLogin'
					type='text'
					value={textInput}
					onChange={(e) => setTextInput(e.target.value)}
					placeholder='GitHub login'
				/>
				<button type='submit'>Wyślij</button>
			</form>
			<ul>
				{repoList.map((repo) => (
					<li key={repo.id}>
						<a
							href={repo.html_url}
							target='blank'>
							{repo.name}
						</a>
					</li>
				))}
			</ul>
			<p style={{ color: 'red' }}>{error}</p>
		</>
	);
};

export default Form;
