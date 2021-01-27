import { StyledError } from './errorMessage.styled';

export default function ErrorMessage(props) {
	return (
		<StyledError>
			<h3>Oups!</h3>
			<p>{props.children}</p>
		</StyledError>
	);
}
