import styled from 'styled-components';

const OfferContainer = styled.div`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	padding: 3.06rem 3rem 1rem 2rem;
	position: relative;
`;

const OfferTitle = styled.h2`
	color: ${({ theme }) => theme.headingColor};
	font-family: Kumbh Sans, sans-serif;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: bold;
	line-height: 1.25rem;

	:hover {
		color: #6e8098;
		cursor: pointer;
	}
`;

const Company = styled.h3`
	color: #6e8098;
	font-family: Kumbh Sans, sans-serif;
	font-style: normal;
	font-weight: normal;
	font-size: 1rem;
	line-height: 1rem;
	padding-bottom: 1.0625rem;
	padding-bottom: 1.625rem;
`;

const Region = styled.p`
	font-family: Kumbh Sans, sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 0.875rem;
	line-height: 1.125rem;
	color: #5964e0;
`;

const OfferTop = styled.div`
	position: absolute;
	height: 50px;
	width: 100px;
	left: 20px;
	top: -25px;
`;

const CompanyIcon = styled.div`
	position: relative;
	height: 50px;
`;

const OfferDetails = styled.span`
	color: #6e8098;
	font-family: Kumbh Sans, sans-serif;
	position: relative;
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

export {
	OfferContainer,
	OfferTitle,
	Company,
	Region,
	CompanyIcon,
	OfferDetails,
	CircleSeparator,
	OfferTop,
};
