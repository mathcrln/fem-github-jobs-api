import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const Company = styled.div`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	padding: 1.4375rem;
	font-size: 16px;
	line-height: 26px;
	margin-top: -2.8rem;
	margin-bottom: 2rem;
	display: flex;
	justify-content: space-between;
	@media ${device.tablet} {
		padding: 3rem;
	}
`;

export { Company };
