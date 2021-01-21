import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const StyledDiv = styled.div`
	background: #5964e0;
	width: 87.2%;
	color: white;
	border-radius: 6px;
	padding: 2rem;
	margin: 2rem auto;
	box-sizing: border-box;

	@media ${device.tablet} {
		width: 89.7%;
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
