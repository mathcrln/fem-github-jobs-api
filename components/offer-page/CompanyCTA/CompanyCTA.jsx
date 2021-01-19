import Button from '../../shared/Button';

import { Company } from './companyCTA.styled';

export default function CompanyCTA({ company }) {
	return (
		<Company>
			<div>
				<h2>{company}</h2>
			</div>
			<div>
				<Button content='Company Site' />
			</div>
		</Company>
	);
}
