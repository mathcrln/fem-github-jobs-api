import { useState } from 'react';
import Container from '../Container';
import FilterDesktop from '../FilterDesktop';
import FilterMobile from '../FilterMobile';
import FilterTablet from '../FilterTablet';
import { Media } from '../../media';

const FilterContainer = ({
	handleSearchChange,
	handleLocationChange,
	handleCheckboxChange,
	fullTimeOnly,
	handleSubmit,
}) => {
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
					handleSubmit={handleSubmit}
				/>
			</Media>
		</Container>
	);
};

export default FilterContainer;
