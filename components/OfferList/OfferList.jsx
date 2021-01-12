import Offer from '../Offer';
import { useFetch } from '../../hooks/useFetch';
import { useDisplayOffers } from '../../hooks/useDisplayOffers';
import { OfferGrid, Loading } from './offerList.styled';

export default function OfferList(
	description = '',
	fullTime = '',
	location = ''
) {
	const requestedUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json${
		description || fullTime || location
			? `?description=${description}&full_time=${fullTime}&location=${location}`
			: ''
	}`;
	const { data, loading } = useFetch(requestedUrl);
	const { displayed, loadMore } = useDisplayOffers(12);
	const isDisplayComplete = displayed > data.length ? true : false;
	return (
		<>
			{loading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<OfferGrid>
						{data.slice(0, displayed).map((offer) => (
							<Offer
								key={offer.id}
								title={offer.title}
								createdAt={offer.created_at}
								contractType={offer.type}
								company={offer.company}
								region={offer.location}
								companyIcon={offer.company_logo}
							/>
						))}
					</OfferGrid>
					{isDisplayComplete ? null : (
						<button onClick={loadMore}>Load more</button>
					)}
				</>
			)}
		</>
	);
}
