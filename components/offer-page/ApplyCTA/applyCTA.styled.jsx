import styled from 'styled-components';
import { device } from '../../../utilities/devices';

const StyledDiv = styled.div`
	background: ${({ theme }) => theme.elementsBackground};
	padding: 0.5rem 0;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	box-sizing: border-box;
`;
const Container = styled.div`
	width: 87.2%;
	margin: auto;
	display: flex;
	align-items: center;

	color: ${({ theme }) => theme.text};

	@media ${device.tablet} {
		width: 89.7%;
	}

	@media ${device.desktop} {
		width: 50.6%;
	}
`;
const Informations = styled.div`
	display: none;
	@media ${device.tablet} {
		min-width: 80%;
		display: block;
	}
`;

const Title = styled.h2`
	color: ${({ theme }) => theme.headingColor};

	@media ${device.tablet} {
		font-size: 1rem;
	}
`;
const CTA = styled.div`
	width: 100%;
`;

export { StyledDiv, Informations, CTA, Container, Title };
