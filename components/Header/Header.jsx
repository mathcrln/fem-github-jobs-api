import { StyledHeader, LogoContainer, ToggleContainer } from './header.styled';
import Container from '../Container';
import Image from 'next/image';
import Toggle from '../Toggle';

export default function Header({ theme, toggleTheme }) {
	return (
		<StyledHeader>
			<Container additionalStyles='display: flex; justify-content: space-between; align-items: center;'>
				<LogoContainer>
					<Image
						src='/logo.svg'
						alt='Picture of the author'
						width={115}
						height={32}
					/>
				</LogoContainer>

				<ToggleContainer>
					<Toggle theme={theme} toggleTheme={toggleTheme} />
				</ToggleContainer>
			</Container>
		</StyledHeader>
	);
}
