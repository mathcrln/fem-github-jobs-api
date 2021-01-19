import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../../components/shared/Header';
import { useFetch } from '../../../hooks/useFetch';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import Loading from '../../../components/shared/Loading';
import Button from '../../../components/shared/Button';

import {
	Main,
	SingleOfferContainer,
	OfferHeader,
	OfferDetails,
	CircleSeparator,
	OfferTitle,
	Region,
} from './index-offer.styled';
import relativeDate from 'relative-date';

const SingleOffer = ({ theme, toggleTheme }) => {
	const router = useRouter();
	const { id } = router.query;
	const requestedUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`;
	const { data, loading } = useFetch(requestedUrl, true);
	const Description = unified()
		.use(parse)
		.use(remark2react, {
			remarkReactComponents: {
				// h2: StyledH2,
			},
		})
		.processSync(data.description).result;

	console.log(data);
	let timeSince = relativeDate(Date.parse(data?.created_at));
	timeSince = timeSince?.charAt(0).toUpperCase() + timeSince?.slice(1);
	return (
		<>
			<Head>
				<title>{data.title}</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='App'>
				<Header theme={theme} toggleTheme={toggleTheme} />
				{loading ? (
					<Loading />
				) : (
					<Main>
						<SingleOfferContainer>
							<OfferHeader>
								<div>
									<div>
										<OfferDetails>{timeSince}</OfferDetails>
										<CircleSeparator />
										<OfferDetails> {data.type}</OfferDetails>
									</div>

									<div>
										<OfferTitle>{data.title}</OfferTitle>

										<Region>{data.location}</Region>
									</div>
								</div>
								<div>
									<Button content='Apply now' />
								</div>
							</OfferHeader>
							{Description}
						</SingleOfferContainer>
					</Main>
				)}
			</div>
		</>
	);
};

export default SingleOffer;
export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
