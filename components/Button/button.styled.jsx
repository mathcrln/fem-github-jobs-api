import styled from 'styled-components';

const StyledButton = styled.button`
	background: #5964e0;
	border: none;
	border-radius: 5px;
	box-shadow: none;
	color: white;
	cursor: pointer;
	padding: ${(props) => props.padding};
	display: flex;
	align-items: center;
	font-size: 1rem;
	font-weight: bold;
	max-height: 3rem;
	font-family: 'Kumbh Sans', serif;
	:hover {
		background: #939bf4;
	}
`;

export { StyledButton };
