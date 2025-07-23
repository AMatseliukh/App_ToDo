import * as React from 'react';
import { View } from 'react-native';
import { Searchbar } from 'react-native-paper';


type SearchInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChangeText,
}) => {
  return (
    <View style={{ width: '100%', paddingHorizontal: 12  }}>
      <Searchbar
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

export default SearchInput;
