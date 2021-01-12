import { useEffect, useState } from 'react';
export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const data = await response.json();
			setData(data);
			setLoading(false);
		}
		fetchData();
	}, []);

	return { data, loading };
};
