import Image from 'next/image';
import { StyledButton } from './button.styled';

export default function Button({ content, padding = '1rem 2.4375rem' }) {
	return (
		<StyledButton padding={padding}>{content ? content : null}</StyledButton>
	);
}
