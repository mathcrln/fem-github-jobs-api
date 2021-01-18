// import App from 'next/app'
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from '../hooks/useDarkMode';
import { lightTheme, darkTheme } from '../theme';
import { GlobalStyles } from '../global';

function MyApp({ Component, pageProps }) {
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
			<GlobalStyles />
			<Component {...pageProps} theme={theme} toggleTheme={toggleTheme} />
		</ThemeProvider>
	);
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
