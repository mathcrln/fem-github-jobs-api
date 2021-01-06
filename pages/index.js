import Head from 'next/head';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import Toggle from '../components/DarkModeToggle';

import OfferList from '../components/OfferList';
import Container from '../components/Container';

export default function Home() {
	const [theme, setTheme] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};
	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />

				<div className='container'>
					<Head>
						<title>Github Jobs API</title>
						<link rel='icon' href='/favicon.ico' />
					</Head>

					<main>
						<Container>
							<OfferList />
						</Container>
						{/* <Toggle theme={theme} toggleTheme={toggleTheme} /> */}
					</main>
				</div>
			</>
		</ThemeProvider>
	);
}
