import styled from 'styled-components';

const StyledButton = styled.button`
	background: #5964e0;
	border: none;
	border-radius: 5px;
	box-shadow: none;
	color: white;
	cursor: pointer;
	padding: ${(props) => props.padding};
	width: ${(props) => props.width};
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1rem;
	font-weight: bold;
	max-height: 3rem;
	font-family: 'Kumbh Sans', serif;
	min-width: max-content;
	:hover {
		background: #939bf4;
	}

	${(props) => props.additionnalStyles};
`;

export { StyledButton };
