import Offer from '../Offer';
import { useFetch } from '../../hooks/useFetch';
import OfferGrid from './offerList.styled';

export default function OfferList() {
	const { data, loading } = useFetch(
		'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
	);

	return (
		<OfferGrid>
			{loading ? (
				<p>Loading...</p>
			) : (
				data.map((offer) => (
					<Offer
						key={offer.id}
						title={offer.title}
						timeSince='5h ago'
						contractType={offer.type}
						company={offer.company}
						region={offer.location}
						companyIcon={offer.company_logo}
					/>
				))
			)}
		</OfferGrid>
	);
}
