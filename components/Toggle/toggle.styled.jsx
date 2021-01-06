import styled from 'styled-components';

// Toggle.styled.js
const ToggleSwitch = styled.button`
	background: white;
	border: none;
	border-radius: 30px;
	cursor: pointer;

	margin: 0 auto;

	padding: 0.5rem;

	width: 3rem;
	height: 1.5rem;
	display: flex;
	align-items: center;

	justify-content: ${({ lightTheme }) =>
		lightTheme ? 'flex-start' : 'flex-end'};
`;

const ToggleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 112px;
`;
const ToggleBall = styled.span`
	background: #5964e0;
	display: block;
	height: 14px;
	width: 14px;
	border-radius: 10px;
`;

export { ToggleContainer, ToggleSwitch, ToggleBall };
