import unified from 'unified';
import parse from 'remark-parse';
import remark2react from 'remark-react';
import { StyledDiv, StyledLinks, StyledH2 } from './howToApply.styled';

export default function HowToApply({ content }) {
	const Description = unified()
		.use(parse)
		.use(remark2react, {
			remarkReactComponents: {
				a: StyledLinks,
				h2: StyledH2,
			},
		})
		.processSync(content).result;
	return (
		<StyledDiv>
			<StyledH2>How To Apply</StyledH2>
			{Description}
		</StyledDiv>
	);
}
