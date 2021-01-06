import Image from 'next/image';
import {
	OfferContainer,
	OfferTitle,
	Company,
	Region,
	CompanyIcon,
	OfferDetails,
	CircleSeparator,
} from './offer.styled';

export default function Offer({
	title,
	company,
	timeSince,
	region,
	contractType,
	companyIcon,
}) {
	return (
		<OfferContainer>
			<CompanyIcon>
				<Image
					src={`/company/${companyIcon}.svg`}
					alt={company}
					width={50}
					height={50}
				/>
			</CompanyIcon>
			<OfferDetails>{timeSince}</OfferDetails>
			<CircleSeparator />
			<OfferDetails>{contractType}</OfferDetails>
			<OfferTitle>{title}</OfferTitle>
			<Company>{company}</Company>
			<Region>{region}</Region>
		</OfferContainer>
	);
}
