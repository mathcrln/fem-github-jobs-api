// Toggle.js
import React from 'react';
import { func, string } from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';
import ToggleContainer from './darkModeToggle.styled';

// import { ReactComponent as MoonIcon } from '../public/icon-moon.svg';
// import { ReactComponent as SunIcon } from '../public/icon-sun.svg';

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<ToggleContainer onClick={toggleTheme}>
			<Image src='/icon-sun.svg' width={32} height={32} />
			<Image src='/icon-moon.svg' width={32} height={32} />
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
