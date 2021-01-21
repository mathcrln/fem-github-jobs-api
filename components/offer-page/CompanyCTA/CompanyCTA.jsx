import Button from '../../shared/Button';
import Image from 'next/image';

import {
	Company,
	CompanyName,
	CompanyIcon,
	LogoContainer,
	CompanyInfos,
} from './companyCTA.styled';

export default function CompanyCTA({ company, logo, url }) {
	const shortenedUrl = url?.split(/\//)[2]?.split(/www./)[1];
	return (
		<Company>
			{logo && (
				<LogoContainer>
					<CompanyIcon>
						<Image
							src={`${logo}`}
							alt={company}
							layout='fill'
							objectFit='contain'
						/>
					</CompanyIcon>
				</LogoContainer>
			)}
			<CompanyInfos>
				<CompanyName>{company}</CompanyName>
				{shortenedUrl ? <p>{shortenedUrl}</p> : null}
			</CompanyInfos>
			<div>
				{shortenedUrl ? (
					<Button
						handler={() => window.open(url, '_blank')}
						content='Company Site'
					/>
				) : null}
			</div>
		</Company>
	);
}
