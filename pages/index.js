import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';
import OfferList from '../components/OfferList';
import Header from '../components/Header';
import Container from '../components/Container';
import FilterContainer from '../components/FilterContainer';

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
				<Head>
					<title>Github Jobs API</title>
					<link rel='icon' href='/favicon.ico' />
				</Head>

				<div className='App'>
					<Header theme={theme} toggleTheme={toggleTheme} />
					<FilterContainer />
					<main>
						<Container>
							<OfferList />
						</Container>
					</main>
				</div>
			</>
		</ThemeProvider>
	);
}
