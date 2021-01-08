import styled from 'styled-components';
import { device } from '../../utilities/devices';

const StyledHeader = styled.header`
	background-image: url('./mobile/bg-pattern-header.svg');
	background-size: cover;
	margin-bottom: 8rem;
	min-height: 8.5rem;
	padding-top: 2rem;
	/* display: grid;
	align-items: center; */

	@media ${device.tablet} {
		background-image: url('./tablet/bg-pattern-header.svg');
		min-height: 10rem;
		border-radius: 0px 0px 0px 100px;
		padding-top: 2.625rem;
	}

	@media ${device.desktop} {
		background-image: url('./desktop/bg-pattern-header.svg');
		padding-top: 2.75rem;
	}
`;

const LogoContainer = styled.div`
	max-width: 115px;
`;

const ToggleContainer = styled.div`
	max-width: 115px;
`;

export { StyledHeader, LogoContainer, ToggleContainer };
