import { StyledModal, ModalContainer } from './mobileModal.styled';
import SearchBar from '../SearchBar';
import Button from '../shared/Button';
import Checkbox from '../Checkbox';

const MobileModal = ({
	isChecked,
	handleLocationChange,
	handleCheckboxChange,
	handleModalSubmit,
	handleCloseModal,
	modalStatus,
}) => {
	return (
		<StyledModal
			isOpen={modalStatus}
			onBackgroundClick={handleCloseModal}
			onEscapeKeydown={handleCloseModal}
		>
			<SearchBar
				name='location'
				iconFile='icon-location'
				iconWidth={16.725}
				iconHeight={23.89}
				placeholder='Filter by location…'
				additionalStyles='padding-left:1.5rem; border-bottom: 0.8px solid #6e8098; width: 100%; margin: 1.5rem 0 1rem 0; padding-bottom: 1.5rem'
				handleChange={handleLocationChange}
			/>
			<ModalContainer>
				<label>
					<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
					<span>Full Time Only </span>
				</label>
			</ModalContainer>
			<ModalContainer>
				<Button
					form='SearchFormMobile'
					content='Search'
					type='submit'
					handler={handleModalSubmit}
					width='100%'
				/>
			</ModalContainer>
		</StyledModal>
	);
};

export default MobileModal;
