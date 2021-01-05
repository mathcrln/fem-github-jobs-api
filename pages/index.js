import Head from 'next/head';
import SingleOffer from '../components/single-offer.component';
import JobList from '../components/job-list';
import Container from '../components/container.component';
import Button from '../components/button.component';

export default function Home() {
	return (
		<div className='container'>
			<Head>
				<title>Github Jobs API</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<Container>
					<JobList />
				</Container>
			</main>
		</div>
	);
}
