import { func, string } from 'prop-types';
import Image from 'next/image';
import ToggleContainer from './darkModeToggle.styled';

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<ToggleContainer onClick={toggleTheme} aria-label='Mode'>
			<Image src='/icon-sun.svg' width={32} height={32} alt='Light Mode' />
			<Image src='/icon-moon.svg' width={32} height={32} alt='Dark Mode' />
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
