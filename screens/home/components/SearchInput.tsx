import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';


type SearchInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};
// eslint-disable-next-line react-hooks/rules-of-hooks
const [searchQuery, setSearchQuery] = React.useState('');

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 12 }}>
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
      {/* <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      /> */}
    </View>
  );
};

export default SearchInput;
