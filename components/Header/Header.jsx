import { StyledHeader, LogoContainer, ToggleContainer } from './header.styled';
import Link from 'next/link';
import Container from '../Container';
import Image from 'next/image';
import Toggle from '../Toggle';

const Logo = React.forwardRef((props, ref) => (
	<LogoContainer>
		<a ref={ref} {...props}>
			<Image src='/logo.svg' alt='Dev Jobs' width={115} height={32} />
		</a>
	</LogoContainer>
));

export default function Header({ theme, toggleTheme }) {
	return (
		<StyledHeader>
			<Container additionalStyles='display: flex; justify-content: space-between; align-items: center;'>
				<Link href='/maman'>
					<Logo />
				</Link>

				<ToggleContainer>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</ToggleContainer>
			</Container>
		</StyledHeader>
	);
}
