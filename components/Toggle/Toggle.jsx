// Toggle.js
import React from 'react';
import { func, string } from 'prop-types';

import Image from 'next/image';
import { ToggleContainer, ToggleSwitch, ToggleBall } from './toggle.styled';

const Toggle = ({ theme, toggleTheme }) => {
	const isLight = theme === 'light';
	return (
		<ToggleContainer onClick={toggleTheme}>
			<Image src='/icon-sun.svg' width={20} height={20} />
			<ToggleSwitch lightTheme={isLight}>
				<ToggleBall />
			</ToggleSwitch>
			<Image src='/icon-moon.svg' width={18} height={18} />
		</ToggleContainer>
	);
};

Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};

export default Toggle;
