// export default function Button({ CallToAction = 'Nameless button' }) {
// 	return <button className='container mx-auto px-5'>{CallToAction}</button>;
// }

import styled from 'styled-components';

const StyledButton = styled.button`
	background: #939bf4;
	border-radius: 5px;
	color: white;
	padding: 1rem 2.4375rem;
	font-size: 1rem;
	border: none;
	box-shadow: none;
`;

export default function Button({ buttonTitle = 'Button' }) {
	return <StyledButton>{buttonTitle}</StyledButton>;
}
