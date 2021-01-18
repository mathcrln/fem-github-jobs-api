import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../../../components/Header';

const SingleOffer = ({ theme, toggleTheme }) => {
	const router = useRouter();
	const { id } = router.query;

	return (
		<>
			<Header theme={theme} toggleTheme={toggleTheme} />
			<h1>Post: {id}</h1>
			<ul>
				<li>
					<Link href='/post/[id]/[comment]' as={`/post/${id}/first-comment`}>
						<a>First comment</a>
					</Link>
				</li>
				<li>
					<Link href='/post/[id]/[comment]' as={`/post/${id}/second-comment`}>
						<a>Second comment</a>
					</Link>
				</li>
			</ul>
		</>
	);
};

export default SingleOffer;
