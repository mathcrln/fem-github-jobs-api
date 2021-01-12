import { useState } from 'react';
import Container from '../Container';
import FilterDesktop from '../FilterDesktop';
import FilterMobile from '../FilterMobile';
import FilterTablet from '../FilterTablet';
import { Media } from '../../media';

const FilterContainer = (submitSearchQuery) => {
	const [search, setSearch] = useState('');
	const [location, setlocation] = useState('');
	const [fullTimeOnly, setfullTimeOnly] = useState(false);

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};
	const handleLocationChange = (event) => {
		setlocation(event.target.value);
	};
	const handleCheckboxChange = (event) => {
		setfullTimeOnly(event.target.checked);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Container additionalStyles='margin-top: -3rem; margin-bottom: 4rem;'>
			<Media at='mobile'>
				<FilterMobile
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={handleSubmit}
				/>
			</Media>
			<Media between={['tablet', 'laptop']}>
				<FilterTablet
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={handleSubmit}
				/>
			</Media>
			<Media greaterThanOrEqual='laptop'>
				<FilterDesktop
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={submitSearchQuery}
				/>
			</Media>
		</Container>
	);
};

export default FilterContainer;
