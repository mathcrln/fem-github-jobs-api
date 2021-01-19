import { useEffect, useState } from 'react';
export const useFetch = (requestedUrl, submitted) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
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
