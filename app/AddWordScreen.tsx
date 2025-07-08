import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import Header from '../components/Header';
import PrimaryButton from '../components/PrimaryButton';
import InputFolderDeckWord from '../screens/addWords/InputFolderDeckWord';
import FlagBlock from '../screens/home/components/FlagBlock';

// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter();
const AddWordScreen = () => {
  const handleGoBack = () => {
    router.back();
  };
  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <Header
          backIcon={<ArrowLeftIcon />}
          title="Chapter 1"
          actionMenuIcon=""
          onBackIconPress={handleGoBack}
        />
        <FlagBlock />
        <View style={{ paddingHorizontal: 40 }}>
          <InputFolderDeckWord
            label="Word in English"
            placeholder="some word in origin language"
          />
          <PrimaryButton title="Translate" onPress={() => alert('Pressed')} />
          <InputFolderDeckWord
            label="Word in Ukrainian"
            placeholder="some word in your native language"
          />
          <PrimaryButton title="Add" onPress={() => alert('Pressed')} />
        </View>
      </View>
    </ScrollView>
  );
};
export default AddWordScreen;

