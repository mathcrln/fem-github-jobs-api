import { TextInput, StyledSearch } from './searchBar.styled';
import Image from 'next/image';

const SearchBar = ({
	name,
	placeholder,
	iconFile,
	iconWidth,
	iconHeight,
	additionalStyles,
	onChange,
}) => {
	return (
		<StyledSearch additionalStyles={additionalStyles}>
			{iconFile ? (
				<Image src={`/${iconFile}.svg`} width={iconWidth} height={iconHeight} />
			) : null}
			<TextInput
				name={name}
				type='text'
				placeholder={placeholder}
				id={name}
				onChange={onChange}
			/>
		</StyledSearch>
	);
};

export default SearchBar;
