import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

interface InputFolderDeckWordProps {
  label: string;
  placeholder: string;
}

const InputFolderDeckWord: React.FC<InputFolderDeckWordProps> = ({
  label,
  placeholder,
}) => {
  const [value, setValue] = React.useState('');
  return (
    <View style={{ width: '100%', marginTop: 30 }}>
      <Text style={{ color: '#000000', fontSize: 20 }}>{label}</Text>
      <TextInput
        mode="outlined"
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        keyboardType="default"
        right={
          <TextInput.Icon
            icon="close-circle-outline"
            onPress={() => setValue('')}
          />
        }
        style={{ backgroundColor: '#f1dfdb', color: '#000000' }}
      />
    </View>
  );
};
export default InputFolderDeckWord;
