import Head from 'next/head';
import { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import OfferList from '../components/OfferList';
import Header from '../components/shared/Header';
import Container from '../components/Container';
import FilterContainer from '../components/FilterContainer';

export default function Home({ theme, toggleTheme }) {
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
	};

	return (
		<ModalProvider>
			<>
				<Head>
					<title>Github Jobs API</title>
					<link rel='icon' href='/favicon.ico' />
					<meta
						name='description'
						content='Find the best jobs offers on Github'
					/>
				</Head>
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
							<OfferList
								description={search}
								location={location}
								fullTimeOnly={fullTimeOnly}
								submitted={submitted}
							/>
						</Container>
					</main>
				</div>
			</>
		</ModalProvider>
	);
}
