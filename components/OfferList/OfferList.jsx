import Offer from '../Offer';
import OfferGrid from './offerList.styled';

export default function OfferList() {
	return (
		<OfferGrid>
			<Offer
				title='Senior Software Engineer'
				timeSince='5h ago'
				contractType='Full Time'
				company='So Digital Inc.'
				region='Remote, Seoul, Tokyo, Mountain View, San Fransisco'
				companyIcon='so-digital'
			/>
			<Offer
				title='Haskell and PureScript Dev'
				timeSince='20h ago'
				contractType='Part Time'
				company='National Wildlife'
				region='Columbus, OH'
				companyIcon='national-wildlife'
			/>
			<Offer
				title='Midlevel Back End Engineer'
				timeSince='1d ago'
				contractType='Part Time'
				company='Photosnap Ltd.'
				region='Russia'
				companyIcon='photosnap'
			/>
		</OfferGrid>
	);
}
