import { useState } from 'react';

export const useDisplayOffers = (initial) => {
	const [displayed, setDisplayed] = useState(12);

	const loadMore = () => {
		setDisplayed(displayed + 10);
	};

	return { displayed, loadMore };
};
