import styled from 'styled-components';
import { device } from '../../utilities/devices';

const OfferGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-row-gap: 3rem;
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

export default OfferGrid;
