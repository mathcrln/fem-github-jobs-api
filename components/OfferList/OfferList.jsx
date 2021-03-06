import Offer from '../Offer';
import Button from '../shared/Button';
import { useFetch } from '../../hooks/useFetch';
import { useDisplayOffers } from '../../hooks/useDisplayOffers';
import { OfferGrid, Center } from './offerList.styled';
import Loading from '../shared/Loading';
import ErrorMessage from '../shared/ErrorMessage';

export default function OfferList({
	description = '',
	fullTimeOnly = '',
	location = '',
	submitted,
}) {
	const requestedUrl = `https://mathcrln-cors.herokuapp.com/https://jobs.github.com/positions.json?${
		description ? `description=${description}&` : ''
	}${fullTimeOnly ? `full_time=on&` : ''}${
		location ? `location=${location}` : ''
	}`;

	const { data, loading, error } = useFetch(requestedUrl, submitted);
	const { displayed, loadMore } = useDisplayOffers(12);
	const isDisplayComplete = displayed > data.length ? true : false;
	return (
		<>
			{loading ? (
				<Loading />
			) : error ? (
				<ErrorMessage>{error}</ErrorMessage>
			) : (
				<>
					<OfferGrid>
						{data?.slice(0, displayed).map((offer) => (
							<Offer
								key={offer.id}
								id={offer.id}
								title={offer.title}
								createdAt={offer.created_at}
								contractType={offer.type}
								company={offer.company}
								region={offer.location}
								companyIcon={offer.company_logo}
							/>
						))}
					</OfferGrid>
					<Center>
						{isDisplayComplete ? null : (
							<Button content='Load More' handler={loadMore} />
						)}
					</Center>
				</>
			)}
		</>
	);
}
