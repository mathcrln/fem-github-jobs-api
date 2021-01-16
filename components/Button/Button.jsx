import { StyledButton } from './button.styled';

export default function Button({
	content,
	name,
	padding = '1rem 2.4375rem',
	handler,
	type = 'button',
	role = 'button',
}) {
	return (
		<StyledButton
			name={name}
			padding={padding}
			onClick={handler}
			type={type}
			role={role}
		>
			{content ? content : null}
		</StyledButton>
	);
}
