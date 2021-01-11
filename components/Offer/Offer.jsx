import Image from 'next/image';
import {
	OfferContainer,
	OfferTitle,
	Company,
	Region,
	CompanyIcon,
	OfferDetails,
	CircleSeparator,
	OfferTop,
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
			<OfferTop>
				{companyIcon && (
					<CompanyIcon>
						<Image
							src={`${companyIcon}`}
							alt={company}
							layout='fill'
							objectFit='contain'
						/>
					</CompanyIcon>
				)}
			</OfferTop>

			<OfferDetails>{timeSince}</OfferDetails>
			<CircleSeparator />
			<OfferDetails>{contractType}</OfferDetails>
			<OfferTitle>{title}</OfferTitle>
			<Company>{company}</Company>
			<Region>{region}</Region>
		</OfferContainer>
	);
}
