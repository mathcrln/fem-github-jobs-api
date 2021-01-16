import Modal from 'styled-react-modal';
import styled from 'styled-components';

const StyledModal = Modal.styled`
  width: 87.2%;
  height: 13.56rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.elementsBackground};;
  border-radius: 6px;
`;
const ModalContainer = styled.div`
	width: 90%;
	margin: 0.8rem auto;
	font-weight: bold;
`;

export { StyledModal, ModalContainer };
