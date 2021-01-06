import StyledContainer from './container.styled';

export default function Container({ additionalStyles, children }) {
	return (
		<StyledContainer additionalStyles={additionalStyles}>
			{children}
		</StyledContainer>
	);
}
