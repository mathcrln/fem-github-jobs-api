import styled from 'styled-components';
import SingleOffer from './single-offer.component';

const JobGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 30px;
`;

export default function JobList() {
	return (
		<JobGrid>
			<SingleOffer
				title='Senior Software Engineer'
				timeSince='5h ago'
				contractType='Full Time'
				company='So Digital Inc.'
				region='Remote, Seoul, Tokyo, Mountain View, San Fransisco'
				companyIcon='photosnap'
			/>
			<SingleOffer
				title='Haskell and PureScript Dev'
				timeSince='20h ago'
				contractType='Part Time'
				company='National Wildlife'
				region='Columbus, OH'
				companyIcon='national-wildlife'
			/>
			<SingleOffer
				title='Midlevel Back End Engineer'
				timeSince='1d ago'
				contractType='Part Time'
				company='Photosnap Ltd.'
				region='Russia'
				companyIcon='so-digital'
			/>
		</JobGrid>
	);
}
