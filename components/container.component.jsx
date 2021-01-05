import styled from 'styled-components';

const StyledContainer = styled.div`
	width: 77%;
	margin: auto;
	margin-top: 15rem;
`;

export default function Container({ children }) {
	return <StyledContainer>{children}</StyledContainer>;
}
