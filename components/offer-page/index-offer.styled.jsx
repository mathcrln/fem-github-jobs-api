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
const StyledLinks = styled.a`
	font-family: Kumbh Sans;
	font-style: normal;
	font-weight: bold;
	line-height: 26px;

	color: #5964e0;
	text-decoration: underline;
`;
const StyledUl = styled.ul`
	list-style: none;
`;
const StyledLi = styled.li`
	margin-left: -2em;
	&:before {
		content: '•';
		color: #5964e0;
		font-weight: bold; /* If you want it to be bold */
		display: inline-block; /* Needed to add space between the bullet and the text */
		width: 1em; /* Also needed for space (tweak if needed) */
		margin-right: 0.5em; /* Also needed for space (tweak if needed) */
	}
`;

export { Main, SingleOfferContainer, Loading, StyledLinks, StyledUl, StyledLi };
