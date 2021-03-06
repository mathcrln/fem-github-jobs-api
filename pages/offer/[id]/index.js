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
import ApplyCTA from '../../../components/offer-page/ApplyCTA';
import ErrorMessage from '../../../components/shared/ErrorMessage';

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
	const requestedUrl = `https://mathcrln-cors.herokuapp.com/https://jobs.github.com/positions/${id}.json?markdown=true`;
	const { data, loading, error } = useFetch(requestedUrl, true);
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
	return (
		<>
			<Head>
				<title>
					{data?.title} | {data?.company}
				</title>
				<meta
					name='description'
					content={`Find out everything you need to know about the "${data?.title}" job offer at ${data?.company}.`}
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className='App'>
				<Header theme={theme} toggleTheme={toggleTheme} />
				{loading ? (
					<Loading />
				) : error ? (
					<Main>
						<ErrorMessage>{error}</ErrorMessage>
					</Main>
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
									url={data?.url}
								/>
								{Description}
							</SingleOfferContainer>
						</Main>
						<HowToApply content={data?.how_to_apply} />
						{data?.company_url ? (
							<ApplyCTA
								title={data?.title}
								url={data?.url}
								companyUrl={data?.company_url}
							/>
						) : null}
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
