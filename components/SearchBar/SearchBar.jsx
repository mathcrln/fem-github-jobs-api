import { TextInput, StyledSearch } from './searchBar.styled';
import Image from 'next/image';

const SearchBar = ({
	width,
	filter,
	name,
	placeholder,
	iconFile,
	iconWidth,
	iconHeight,
}) => {
	return (
		<StyledSearch>
			<Image src={`/${iconFile}.svg`} width={iconWidth} height={iconHeight} />
			<TextInput type='text' placeholder={placeholder} id={name} />
		</StyledSearch>
	);
};

export default SearchBar;
