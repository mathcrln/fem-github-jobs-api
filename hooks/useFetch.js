import { useEffect, useState } from 'react';
export const useFetch = (requestedUrl, submitted) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	useEffect(() => {
		fetch(requestedUrl)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response;
			})
			.then((response) => response.json())
			.then(function (data) {
				if (data.length === 0) {
					throw Error(
						"This search doesn't return any result. Please try something else."
					);
				}
				setData(data);
				setLoading(false);
			})
			.catch(function (error) {
				if (error.message === 'Failed to fetch') {
					setError(
						'It seems that our system failed to fetch the desired results. Please try again later.'
					);
				} else {
					setError(error.message);
					console.log(error.message);
				}
				setLoading(false);
			});
	}, [submitted]);

	return { data, loading, error };
};
