import SearchBar from '../SearchBar';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { Form, StyledDiv, StyledCheckbox } from './FilterTablet.styled';

const FilterTablet = ({
	state,
	handleCheckboxChange,
	handleChange,
	handleSubmit,
}) => {
	return (
		<Form onSubmit={handleSubmit}>
			<SearchBar
				name='search'
				iconFile='icon-search'
				iconWidth={23.94}
				iconHeight={23.94}
				placeholder='Filter by title...'
				additionalStyles='border-right: 0.8px solid #6e8098;'
				onChange={handleChange}
			/>
			<SearchBar
				name='location'
				iconFile='icon-location'
				iconWidth={16.725}
				iconHeight={23.89}
				placeholder='Filter by location…'
				additionalStyles='padding-left:1.5rem; border-right: 0.8px solid #6e8098;'
				value={state.location}
				onChange={handleChange}
			/>

			<StyledCheckbox>
				<Checkbox checked={state.checked} onChange={handleCheckboxChange} />
				<span>Full Time</span>
			</StyledCheckbox>
			<StyledDiv>
				<Button content='Search' padding='1rem 0.875rem' type='submit' />
			</StyledDiv>
		</Form>
	);
};

export default FilterTablet;
