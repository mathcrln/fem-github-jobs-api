import Offer from '../Offer';
import Button from '../Button';
import { useFetch } from '../../hooks/useFetch';
import { useDisplayOffers } from '../../hooks/useDisplayOffers';
import { OfferGrid, Loading, Center } from './offerList.styled';

export default function OfferList({
	description = '',
	fullTimeOnly = '',
	location = '',
	submitted,
}) {
	const { data, loading } = useFetch(
		description,
		fullTimeOnly,
		location,
		submitted
	);
	const { displayed, loadMore } = useDisplayOffers(12);
	const isDisplayComplete = displayed > data.length ? true : false;
	return (
		<>
			{loading ? (
				<Loading>Loading...</Loading>
			) : (
				<>
					<OfferGrid>
						{console.log('re-rendered')}
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
