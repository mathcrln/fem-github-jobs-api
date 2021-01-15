import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { useState } from 'react';
import { MediaContextProvider } from '../media';
import { ModalProvider } from 'styled-react-modal';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import OfferList from '../components/OfferList';
import Header from '../components/Header';
import Container from '../components/Container';
import FilterContainer from '../components/FilterContainer';
import Link from 'next/link';

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

	const [search, setSearch] = useState('');
	const [location, setlocation] = useState('');
	const [fullTimeOnly, setfullTimeOnly] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};
	const handleLocationChange = (event) => {
		setlocation(event.target.value);
	};
	const handleCheckboxChange = (event) => {
		setfullTimeOnly(event.target.checked);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSubmitted(submitted + 1);
		console.log('submitted');
	};

	return (
		<ThemeProvider theme={themeMode}>
			<ModalProvider>
				<>
					<GlobalStyles />
					<Head>
						<title>Github Jobs API</title>
						<link rel='icon' href='/favicon.ico' />
					</Head>
					<MediaContextProvider>
						<div className='App'>
							<Header theme={theme} toggleTheme={toggleTheme} />

							<FilterContainer
								handleSearchChange={handleSearchChange}
								handleLocationChange={handleLocationChange}
								handleCheckboxChange={handleCheckboxChange}
								fullTimeOnly={fullTimeOnly}
								handleSubmit={handleSubmit}
							/>

							<main>
								<Container>
									<Link href='/offer/[id]' as='/offer/first'>
										<a>First Post</a>
									</Link>
									<OfferList
										description={search}
										location={location}
										fullTimeOnly={fullTimeOnly}
										submitted={submitted}
									/>
								</Container>
							</main>
						</div>
					</MediaContextProvider>
				</>
			</ModalProvider>
		</ThemeProvider>
	);
}
