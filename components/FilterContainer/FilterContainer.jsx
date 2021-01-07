import SearchBar from '../SearchBar';
import Container from '../Container';
import Button from '../Button';
import { StyledFilter, StyledDiv } from './filterContainer.styled';

const FilterContainer = () => {
	return (
		<Container additionalStyles='margin-top: -3rem; margin-bottom: 4rem;'>
			<StyledFilter>
				<SearchBar
					name='generalFilter'
					iconFile='icon-search'
					iconWidth={23.94}
					iconHeight={23.94}
					placeholder='Filter by title, companies, expertise…'
				/>
				<SearchBar
					name='locationlFilter'
					iconFile='icon-location'
					iconWidth={16.725}
					iconHeight={23.89}
					placeholder='Filter by location…'
				/>
				<StyledDiv>
					<label>
						Full Time Only
						<input
							type='checkbox'
							id='fullTimeOnly'
							name='fullTimeOnly'
							value='fullTimeOnly'
						/>
					</label>
					{/* <span>Full Time Only</span> */}
				</StyledDiv>
				<StyledDiv>
					<Button buttonTitle='Search' />
				</StyledDiv>
			</StyledFilter>
		</Container>
	);
};

export default FilterContainer;
