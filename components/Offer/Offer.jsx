import Image from 'next/image';
import relativeDate from 'relative-date';
import Link from 'next/link';
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
	id,
	title,
	company,
	createdAt,
	region,
	contractType,
	companyIcon,
}) {
	let timeSince = relativeDate(Date.parse(createdAt));
	timeSince = timeSince.charAt(0).toUpperCase() + timeSince.slice(1);
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
			<OfferTitle>
				<Link href={`/offer/${id}`}>{title}</Link>
			</OfferTitle>
			<Company>{company}</Company>
			<Region>{region}</Region>
		</OfferContainer>
	);
}
