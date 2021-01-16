import SearchBar from '../SearchBar';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { Form, StyledDiv, StyledCheckbox } from './filterTablet.styled';

const FilterTablet = ({
	isChecked,
	handleCheckboxChange,
	handleSearchChange,
	handleLocationChange,
	handleSubmit,
}) => {
	return (
		<Form id='SearchForm' onSubmit={handleSubmit}>
			<SearchBar
				name='search'
				iconFile='icon-search'
				iconWidth={23.94}
				iconHeight={23.94}
				placeholder='Filter by title...'
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

			<StyledCheckbox>
				<Checkbox checked={isChecked} onChange={handleCheckboxChange} />
				<span>Full Time</span>
			</StyledCheckbox>
			<StyledDiv>
				<Button
					content='Search'
					padding='1rem 0.875rem'
					type='submit'
					form='SearchForm'
				/>
			</StyledDiv>
		</Form>
	);
};

export default FilterTablet;
