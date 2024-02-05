import { useEffect, useState } from 'react';

async function getRepos(filter) {
	const repos = await fetch('/api/getPrivateRepos').then((resp) => resp.json());

	return repos.filter((repo) => repo.name.indexOf(filter) === 0);
}

export default function Repos() {
	const [reposList, setRepoList] = useState([]);
	useEffect(() => {
		getRepos('task-react').then((data) => setRepoList(data));
	}, []);

	return (
		<ul>
			{reposList.map((repo) => (
				<li key={repo.id}>{repo.name}</li>
			))}
		</ul>
	);
}
