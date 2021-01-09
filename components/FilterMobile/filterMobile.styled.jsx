import styled from 'styled-components';
import { device } from '../../utilities/devices';

const Form = styled.form`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	min-height: 5rem;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	justify-content: space-between;
	box-sizing: border-box;

	@media ${device.tablet} {
		grid-template-columns: 1fr 1fr 15% 15%;
	}
	@media ${device.desktop} {
	}
`;

const StyledFilterButton = styled.button`
	background: none;
	border: none;
	padding: 0;
	margin: 1.875rem;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

export { Form, StyledFilterButton };
