import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const StyledDiv = styled.div`
	background-color: #5964e0;
	background-image: url('/mobile/bg-pattern-detail-footer.svg');
	background-size: cover;
	min-height: 8.5rem;
	padding-top: 2rem;
	width: 87.2%;
	color: white;
	border-radius: 6px;
	padding: 2rem;
	margin: 2rem auto;
	word-wrap: break-word;

	@media ${device.tablet} {
		width: 89.7%;
		background-image: url('/desktop/bg-pattern-detail-footer.svg');
	}

	@media ${device.desktop} {
		width: 50.6%;
	}
`;
const StyledLinks = styled.a`
	color: white;
	text-decoration: underline;
`;
const StyledH2 = styled.h2`
	font-family: Kumbh Sans;
	font-style: normal;
	font-weight: bold;
	font-size: 20px;
	line-height: 20px;
	margin-bottom: 2rem;
`;

export { StyledDiv, StyledLinks, StyledH2 };
