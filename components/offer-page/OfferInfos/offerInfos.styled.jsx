import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const OfferHeader = styled.header`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: space-between;
	padding: 0;

	@media ${device.tablet} {
		flex-direction: row;
		align-items: center;
	}
`;
const Informations = styled.div`
	@media ${device.tablet} {
		min-width: 75%;
	}
`;
const OfferTitle = styled.h2`
	font-family: Kumbh Sans, sans-serif;
	font-size: 1.25rem;
	font-style: normal;
	font-style: normal;
	font-weight: bold;
	line-height: 2rem;
	margin: 0.5rem 0;

	color: ${({ theme }) => theme.headingColor};

	@media ${device.tablet} {
		font-size: 1.75rem;
	}
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
	OfferHeader,
	OfferDetails,
	CircleSeparator,
	OfferTitle,
	Region,
	Informations,
};
