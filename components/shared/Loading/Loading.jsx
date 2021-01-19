import Image from 'next/image';

import { LoadingImg, Paragraph } from './loading.styled';

export default function Loading() {
	return (
		<LoadingImg>
			<Image src='/loading.gif' width={50} height={50} />
			<Paragraph>Loading...</Paragraph>
		</LoadingImg>
	);
}
