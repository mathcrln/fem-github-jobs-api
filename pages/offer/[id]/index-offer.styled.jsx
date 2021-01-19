import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const Main = styled.main`
	font-family: Kumbh Sans, sans-serif;
	font-size: 1rem;
	font-style: normal;
	font-weight: normal;
	width: 87.2%;
	margin: auto;
	color: ${({ theme }) => theme.text};

	@media ${device.tablet} {
		width: 89.7%;
	}

	@media ${device.desktop} {
		width: 50.6%;
	}
`;

const OfferHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const SingleOfferContainer = styled.div`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	padding: 1.4375rem;
	font-size: 16px;
	line-height: 26px;

	@media ${device.tablet} {
		padding: 3rem;
	}
`;
const Loading = styled.div`
	text-align: center;
	font-size: 1.5rem;
	font-family: Kumbh Sans, sans-serif;
`;

const OfferTitle = styled.h2`
	font-family: Kumbh Sans, sans-serif;
	font-size: 1.75rem;
	font-style: normal;
	font-style: normal;
	font-weight: bold;
	line-height: 2rem;
	margin: 0.5rem 0;

	color: ${({ theme }) => theme.headingColor};
`;

const CircleSeparator = styled.span`
	height: 4px;
	width: 4px;
	background-color: #6e8098;
	border-radius: 50%;
	display: inline-block;
	vertical-align: middle;
	margin: 0 0.75rem;
`;
const OfferDetails = styled.span`
	color: #6e8098;
	font-family: Kumbh Sans, sans-serif;
	position: relative;
`;
const Region = styled.p`
	font-family: Kumbh Sans, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 0.875rem;
	line-height: 1.125rem;
	color: #5964e0;
`;
export {
	Main,
	SingleOfferContainer,
	OfferHeader,
	Loading,
	OfferDetails,
	CircleSeparator,
	OfferTitle,
	Region,
};
