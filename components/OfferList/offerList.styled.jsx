import styled from 'styled-components';
import { device } from '../../utilities/devices';

const OfferGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 3rem;
	margin-bottom: 5rem;
	@media ${device.tablet} {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.687rem;
		grid-row-gap: 5rem;
	}
	@media ${device.desktop} {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.875rem;
		grid-row-gap: 5rem;
	}
`;

const Loading = styled.p`
	text-align: center;
	font-size: 1.5rem;
	font-family: Kumbh Sans, sans-serif;
`;

export { OfferGrid, Loading };
