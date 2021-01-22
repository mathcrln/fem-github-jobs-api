import { StyledButton } from './button.styled';

export default function Button({
	additionnalStyles,
	content,
	form = '',
	name,
	padding = '1rem 2.4375rem',
	handler,
	type = 'button',
	role = 'button',
	width = 'auto',
}) {
	return (
		<StyledButton
			name={name}
			form={form}
			additionnalStyles={additionnalStyles}
			padding={padding}
			onClick={handler}
			type={type}
			role={role}
			width={width}
			aria-label={name}
		>
			{content ? content : null}
		</StyledButton>
	);
}
