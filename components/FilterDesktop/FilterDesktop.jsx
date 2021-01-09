import SearchBar from '../SearchBar';
import Button from '../Button';
import Checkbox from '../Checkbox';
import { Form, StyledDiv } from './filterDesktop.styled';

const DesktopFilter = ({
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
				placeholder='Filter by title, companies, expertise…'
				additionalStyles='border-right: 0.8px solid #6e8098;'
				handleChange={handleChange}
			/>
			<SearchBar
				name='location'
				iconFile='icon-location'
				iconWidth={16.725}
				iconHeight={23.89}
				placeholder='Filter by location…'
				additionalStyles='padding-left:1.5rem; border-right: 0.8px solid #6e8098;'
				handleChange={handleChange}
			/>
			<StyledDiv>
				<label>
					<Checkbox checked={state.checked} onChange={handleCheckboxChange} />
					<span>Full Time Only </span>
				</label>
			</StyledDiv>
			<StyledDiv>
				<Button content='Search' type='submit' padding='1rem 2.4375rem' />
			</StyledDiv>
		</Form>
	);
};

export default DesktopFilter;
