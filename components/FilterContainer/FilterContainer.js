import Container from '../Container';
import FilterDesktop from '../FilterDesktop';
import FilterMobile from '../FilterMobile';
import FilterTablet from '../FilterTablet';
import { MobileOnly, TabletOnly, LaptopOnly } from './filterContainer.styled';

const FilterContainer = ({
	handleSearchChange,
	handleLocationChange,
	handleCheckboxChange,
	fullTimeOnly,
	handleSubmit,
}) => {
	return (
		<Container additionalStyles='margin-top: -3rem; margin-bottom: 4rem;'>
			<MobileOnly>
				<FilterMobile
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={handleSubmit}
				/>
			</MobileOnly>
			<TabletOnly>
				<FilterTablet
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={handleSubmit}
				/>
			</TabletOnly>
			<LaptopOnly>
				<FilterDesktop
					isChecked={fullTimeOnly}
					handleCheckboxChange={handleCheckboxChange}
					handleSearchChange={handleSearchChange}
					handleLocationChange={handleLocationChange}
					handleSubmit={handleSubmit}
				/>
			</LaptopOnly>
		</Container>
	);
};

export default FilterContainer;
