import styled from 'styled-components';
import { device } from '../../utilities/devices';

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

export { Main, SingleOfferContainer, Loading };
