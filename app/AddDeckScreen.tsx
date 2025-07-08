import React, { useState } from 'react';
import Header from '../components/Header';
import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import InputFolderDeckWord from '../screens/addWords/InputFolderDeckWord';
import PrimaryButton from '../components/PrimaryButton';
import ParentFolder from '../screens/addWords/ParentFolder';
import LanguageSelect from '../screens/addWords/LanguageSelect';

// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter();
const AddDeckScreen = () => {
  const handleGoBack = () => {
    router.back();
  };
  // eslint-disable-next-line no-empty-pattern
  const [] = useState('');
  const [, setSelectedLanguage] = useState('');

  const folderName = 'root'; // або динамічне значення зі стейту/пропсів

  return (
    <ScrollView style={{ width: '100%', backgroundColor: '#fef7ff' }}>
      <View>
        <Header
          backIcon={<ArrowLeftIcon />}
          title=""
          actionMenuIcon=""
          onBackIconPress={handleGoBack}
        />

        <View>
          <ParentFolder folderName={folderName} />
        </View>

        <View style={{ paddingHorizontal: 40 }}>
          <InputFolderDeckWord
            label="Create New Deck"
            placeholder="deck name"
          />

          <LanguageSelect
            label="Your native language"
            placeholder="Ukrainian"
            // options={['Ukrainian', 'English']}
            onSelect={(value) => setSelectedLanguage(value)}
          />
          <LanguageSelect
            label="Language you learn"
            placeholder="English"
            // options={['English', 'Ukrainian']}
            onSelect={(value) => setSelectedLanguage(value)}
          />

          <PrimaryButton title="Add" onPress={() => alert('Pressed')} />
        </View>
      </View>
    </ScrollView>
  );
};
export default AddDeckScreen;
