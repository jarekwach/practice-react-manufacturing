async function getUserRepos(username) {
	try {
		const apiUrl = `https://api.github.com/users/${username}/repos`;

		const response = await fetch(apiUrl);

		if (response.ok) {
			const data = await response.json();

			return data;
		} else {
			console.error('Nieudane pobieranie danych:', response.statusText);
			return null;
		}
	} catch (error) {
		console.error('Wystąpił błąd:', error.message);
		return null;
	}
}

export default getUserRepos;
