import Container from '../Container';
import FilterDesktop from '../FilterDesktop';
import FilterMobile from '../FilterMobile';
import FilterTablet from '../FilterTablet';
import { Media } from '../../media';

class FilterContainer extends React.Component {
	constructor() {
		super();
		this.state = {
			search: '',
			location: '',
			checked: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
	}

	handleChange = (event) => {
		const name = event.target.name;
		this.setState({ [name]: event.target.value });
	};
	handleCheckboxChange = (event) => {
		this.setState({ checked: event.target.checked });
	};
	handleSubmit = (event) => {
		event.preventDefault();
	};

	render() {
		return (
			<Container additionalStyles='margin-top: -3rem; margin-bottom: 4rem;'>
				<Media at='mobile'>
					<FilterMobile
						state={this.state}
						handleCheckboxChange={this.handleCheckboxChange}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</Media>
				<Media between={['tablet', 'laptop']}>
					<FilterTablet
						state={this.state}
						handleCheckboxChange={this.handleCheckboxChange}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</Media>
				<Media greaterThanOrEqual='laptop'>
					<FilterDesktop
						state={this.state}
						handleCheckboxChange={this.handleCheckboxChange}
						handleChange={this.handleChange}
						handleSubmit={this.handleSubmit}
					/>
				</Media>
			</Container>
		);
	}
}

export default FilterContainer;
