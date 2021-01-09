import styled from 'styled-components';
import { device } from '../../utilities/devices';

const Form = styled.form`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	min-height: 5rem;
	display: grid;
	padding: 0 1.5rem;
	grid-template-columns: 33% 33% 22% 12%;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
const StyledCheckbox = styled.label`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	margin-right: 1rem;
`;

export { Form, StyledDiv, StyledCheckbox };
