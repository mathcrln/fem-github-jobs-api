import styled from 'styled-components';
import { device } from '../../utilities/devices';

const MobileOnly = styled.div`
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.desktop} {
		display: none;
	}
`;
const TabletOnly = styled.div`
	display: none;
	@media ${device.tablet} {
		display: block;
	}
	@media ${device.desktop} {
		display: none;
	}
`;
const LaptopOnly = styled.div`
	display: none;
	@media ${device.tablet} {
		display: none;
	}
	@media ${device.desktop} {
		display: block;
	}
`;

export { MobileOnly, TabletOnly, LaptopOnly };
