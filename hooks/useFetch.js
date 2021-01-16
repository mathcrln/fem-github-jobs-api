import { useEffect, useState } from 'react';
export const useFetch = (
	description = '',
	fullTimeOnly = '',
	location = '',
	submitted
) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const requestedUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?${
		description ? `description=${description}&` : ''
	}${fullTimeOnly ? `full_time=on&` : ''}${
		location ? `location=${location}` : ''
	}`;
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(requestedUrl);
			const data = await response.json();
			setData(data);
			setLoading(false);
		}
		fetchData();
	}, [submitted]);

	return { data, loading };
};
