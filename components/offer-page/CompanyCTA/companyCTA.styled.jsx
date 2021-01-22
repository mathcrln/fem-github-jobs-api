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
	flex-direction: column;
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media ${device.tablet} {
		padding: 3rem;
		flex-direction: row;
		align-items: center;
	}
`;

const CompanyName = styled.h2`
	font-family: Kumbh Sans, sans-serif;
	font-size: 1.25rem;
	font-style: normal;
	font-style: normal;
	font-weight: bold;
	line-height: 2rem;
	text-align: center;
	margin: 1rem 0;

	color: ${({ theme }) => theme.headingColor};

	@media ${device.tablet} {
		text-align: left;
		margin: 0rem 0;
		font-size: 1.75rem;
	}
`;
const CompanyInfos = styled.div`
	margin: 0 1rem;
	text-align: center;
`;

const CompanyIcon = styled.div`
	position: relative;
	min-height: 100px;
	display: flex;
	align-items: center;
`;

const LogoContainer = styled.div`
	position: static;
	min-width: 100px;
`;

export { Company, CompanyName, CompanyIcon, LogoContainer, CompanyInfos };
