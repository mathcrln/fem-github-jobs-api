import Button from '../../shared/Button';
import relativeDate from 'relative-date';
import {
	OfferHeader,
	OfferDetails,
	CircleSeparator,
	OfferTitle,
	Region,
	Informations,
} from './offerInfos.styled';

export default function OfferInfos({
	title,
	createdAt,
	location,
	contractType,
}) {
	let timeSince = relativeDate(Date.parse(createdAt));
	timeSince = timeSince?.charAt(0).toUpperCase() + timeSince?.slice(1);
	return (
		<OfferHeader>
			<Informations>
				<div>
					<OfferDetails>{timeSince}</OfferDetails>
					<CircleSeparator />
					<OfferDetails>{contractType}</OfferDetails>
				</div>

				<div>
					<OfferTitle>{title}</OfferTitle>

					<Region>{location}</Region>
				</div>
			</Informations>
			<Button content='Apply now' width='100%' />
		</OfferHeader>
	);
}
