import { StyledButton } from './button.styled';

export default function Button({ buttonTitle = 'Button' }) {
	return <StyledButton>{buttonTitle}</StyledButton>;
}
