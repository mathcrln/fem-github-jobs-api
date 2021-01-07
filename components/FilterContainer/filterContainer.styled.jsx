import styled from 'styled-components';
import { device } from '../../utilities/devices';

const StyledFilter = styled.div`
	background: ${({ theme }) => theme.elementsBackground};
	border-radius: 6px;
	border: none;
	min-height: 5rem;
	display: grid;
	grid-template-columns: 41.6% 27% 16% 1fr;
`;

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
`;

export { StyledFilter, StyledDiv };
