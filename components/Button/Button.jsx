import { StyledButton } from './button.styled';

export default function Button({ content, name, padding = '1rem 2.4375rem' }) {
	return (
		<StyledButton name={name} padding={padding}>
			{content ? content : null}
		</StyledButton>
	);
}
