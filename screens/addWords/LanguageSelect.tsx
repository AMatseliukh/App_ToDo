import React, { useState } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput as RNTextInput,
} from 'react-native';
import { Menu, TextInput } from 'react-native-paper';
import { languages } from '../../dataLanguage';

interface LanguageSelectProps {
  label: string;
  placeholder: string;
  onSelect: (value: string) => void;
}

const LanguageSelect: React.FC<LanguageSelectProps> = ({
  label,
  placeholder,
  onSelect,
}) => {
  const [visible, setVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [query, setQuery] = useState('');

  const filteredLanguages = languages.filter((lang) =>
    lang.label.toLowerCase().includes(query.toLowerCase()),
  );

  const handleSelect = (value: string) => {
    setSelectedLanguage(value);
    onSelect(value);
    setVisible(false);
    setQuery('');
  };

  const selected = languages.find((l) => l.value === selectedLanguage);

  return (
    <View style={{ width: '100%', marginTop: 20 }}>
      <Text style={{ fontSize: 20, color: '#000', marginBottom: 4 }}>
        {label}
      </Text>

      <Menu
        visible={visible}
        onDismiss={() => setVisible(false)}
        anchor={
          <TouchableOpacity onPress={() => setVisible(true)}>
            <TextInput
              mode="outlined"
              placeholder={placeholder}
              value={selected ? `${selected.flag} ${selected.label}` : query}
              editable={false}
              right={<TextInput.Icon icon="menu-down" />}
              style={{ backgroundColor: '#f3e1ef' }}
            />
          </TouchableOpacity>
        }
        contentStyle={{ backgroundColor: '#f9ecea', width: '100%' }}
      >
        <RNTextInput
          placeholder="Search language..."
          value={query}
          onChangeText={setQuery}
          style={{
            padding: 8,
            fontSize: 16,
            borderBottomWidth: 1,
            borderColor: '#ccc',
            marginHorizontal: 8,
            marginBottom: 4,
          }}
        />

        <ScrollView style={{ maxHeight: 200 }}>
          {filteredLanguages.map((lang) => (
            <TouchableOpacity
              key={lang.value}
              onPress={() => handleSelect(lang.value)}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 10,
                paddingHorizontal: 12,
                borderBottomWidth: 1,
                borderColor: '#eee',
              }}
            >
              <Text style={{ fontSize: 20, marginRight: 8 }}>{lang.flag}</Text>
              <Text style={{ fontSize: 16 }}>{lang.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Menu>
    </View>
  );
};

export default LanguageSelect;
