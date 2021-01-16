import styled from 'styled-components';
import { device } from '../../utilities/devices';

const TextInput = styled.input`
	background: ${({ theme }) => theme.elementsBackground};
	border: none;
	min-height: 100%;
	padding: 0 1.003rem;
	color: ${({ theme }) => theme.text};
	font-weight: normal;
	font-family: 'Kumbh Sans', serif;
	font-size: 1rem;
	line-height: 1rem;
	mix-blend-mode: normal;
	opacity: 0.5;
	width: 100%;

	:focus {
		outline: none;
	}
`;
const StyledSearch = styled.div`
	${(props) => props.additionalStyles};
	display: flex;
	align-items: center;
`;

export { StyledSearch, TextInput };
