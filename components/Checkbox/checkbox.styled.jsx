import styled from 'styled-components';

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
	// Hide checkbox visually but remain accessible to screen readers.
	// Source: https://polished.js.org/docs/#hidevisually
	border: 0;
	clip: rect(0 0 0 0);
	clip-path: inset(50%);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	white-space: nowrap;
	width: 1px;
`;
const Icon = styled.svg`
	fill: none;
	stroke: white;
	stroke-width: 2px;
`;
const StyledCheckbox = styled.div`
	margin: 0 1rem;
	display: inline-block;
	width: 1.5rem;
	height: 1.5rem;
	background: ${(props) =>
		props.checked ? '#5964E0' : ({ theme }) => theme.checkBackground};
	border-radius: 3px;
	transition: all 150ms;

	${HiddenCheckbox}:focus + & {
		box-shadow: 0 0 0 3px pink;
	}
	${Icon} {
		visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
	}
`;

const CheckboxContainer = styled.div`
	display: inline-block;
	vertical-align: middle;
`;

export { HiddenCheckbox, StyledCheckbox, CheckboxContainer, Icon };
