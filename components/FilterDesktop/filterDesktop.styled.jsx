import styled from 'styled-components';
import { device } from '../../utilities/devices';

const Form = styled.form`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	min-height: 5rem;
	display: grid;
	grid-template-columns: 41.6% 27% 16% 1fr;
	padding: 0 1.5rem;
	@media ${device.tablet} {
		grid-template-columns: 1fr 1fr 15% 15%;
	}
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

export { Form, StyledDiv };
