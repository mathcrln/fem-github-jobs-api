import Offer from '../Offer';
import { useFetch } from '../../hooks/useFetch';
import { OfferGrid, Loading } from './offerList.styled';

export default function OfferList() {
	const { data, loading } = useFetch(
		'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
	);

	return loading ? (
		<Loading>Loading...</Loading>
	) : (
		<OfferGrid>
			{data.map((offer) => (
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
	);
}
