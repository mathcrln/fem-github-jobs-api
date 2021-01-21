import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../../../components/shared/Header';
import { useFetch } from '../../../hooks/useFetch';
import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import Loading from '../../../components/shared/Loading';
import OfferInfos from '../../../components/offer-page/OfferInfos';
import CompanyCTA from '../../../components/offer-page/CompanyCTA';
import HowToApply from '../../../components/offer-page/HowToApply';

import {
	Main,
	SingleOfferContainer,
	StyledLinks,
	StyledUl,
	StyledLi,
} from '../../../components/offer-page/index-offer.styled';

export default function SingleOffer({ theme, toggleTheme }) {
	const router = useRouter();
	const { id } = router.query;
	const requestedUrl = `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`;
	const { data, loading } = useFetch(requestedUrl, true);
	const Description = unified()
		.use(parse)
		.use(remark2react, {
			remarkReactComponents: {
				a: StyledLinks,
				ul: StyledUl,
				li: StyledLi,
			},
		})
		.processSync(data.description).result;
	console.log(requestedUrl);
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
					<>
						<Main>
							<CompanyCTA
								company={data?.company}
								logo={data?.company_logo}
								url={data?.company_url}
							/>
							<SingleOfferContainer>
								<OfferInfos
									title={data?.title}
									createdAt={data?.created_at}
									location={data?.location}
									contractType={data?.type}
								/>
								{Description}
							</SingleOfferContainer>
						</Main>
						<HowToApply content={data?.how_to_apply} />
					</>
				)}
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {}, // will be passed to the page component as props
	};
}
