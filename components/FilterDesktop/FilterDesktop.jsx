import SearchBar from '../SearchBar';
import Button from '../shared/Button';
import Checkbox from '../Checkbox';
import { Form, StyledDiv } from './filterDesktop.styled';

const DesktopFilter = ({
	isChecked,
	handleSearchChange,
	handleLocationChange,
	handleCheckboxChange,
	handleSubmit,
}) => {
	return (
		<Form id='SearchFormDesktop' onSubmit={handleSubmit}>
			<SearchBar
				name='search'
				iconFile='icon-search'
				iconWidth={23.94}
				iconHeight={23.94}
				placeholder='Filter by title, companies, expertise…'
				additionalStyles='border-right: 0.8px solid #6e8098;'
				handleChange={handleSearchChange}
			/>
			<SearchBar
				name='location'
				iconFile='icon-location'
				iconWidth={16.725}
				iconHeight={23.89}
				placeholder='Filter by location…'
				additionalStyles='padding-left:1.5rem; border-right: 0.8px solid #6e8098;'
				handleChange={handleLocationChange}
			/>
			<StyledDiv>
				<label>
					<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
					<span>Full Time Only </span>
				</label>
			</StyledDiv>
			<StyledDiv>
				<Button
					content='Search'
					type='submit'
					padding='1rem 2.4375rem'
					form='SearchFormDesktop'
				/>
			</StyledDiv>
		</Form>
	);
};

export default DesktopFilter;
