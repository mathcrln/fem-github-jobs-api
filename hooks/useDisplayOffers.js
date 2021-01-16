import { useState } from 'react';

export const useDisplayOffers = (initial) => {
	const [displayed, setDisplayed] = useState(12);

	const loadMore = () => {
		setDisplayed(displayed + 12);
	};

	return { displayed, loadMore };
};
