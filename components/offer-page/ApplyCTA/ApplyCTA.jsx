import Button from '../../shared/Button';
import {
	StyledDiv,
	Informations,
	CTA,
	Container,
	Title,
} from './applyCTA.styled';
import { shortenUrl } from '../../../utilities/shortenUrl';

export default function ApplyCTA({ title, companyUrl, url }) {
	const shortenedCompanyUrl = shortenUrl(companyUrl);
	return (
		<StyledDiv>
			<Container>
				<Informations>
					<Title>{title}</Title>
					<p>{shortenedCompanyUrl}</p>
				</Informations>
				<CTA>
					<Button
						content='Apply Now'
						name='Apply'
						handler={() => window.open(url, '_blank')}
						width='100%'
					/>
				</CTA>
			</Container>
		</StyledDiv>
	);
}
