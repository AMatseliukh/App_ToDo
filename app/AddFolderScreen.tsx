import React from 'react';
import Header from '../components/Header';
import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import ArrowLeftIcon from '../assets/icons/ArrowLeftIcon';
import InputFolderDeckWord from '../screens/addWords/InputFolderDeckWord';
import PrimaryButton from '../components/PrimaryButton';
import ParentFolder from '../screens/addWords/ParentFolder';

// eslint-disable-next-line react-hooks/rules-of-hooks
const router = useRouter();
const AddFolderScreen = () => {
  const handleGoBack = () => {
    router.back();
  };
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
          <InputFolderDeckWord label="Folder name" placeholder="folder name" />
          <PrimaryButton title="Add" onPress={() => alert('Pressed')} />
        </View>
      </View>
    </ScrollView>
  );
};
export default AddFolderScreen;
