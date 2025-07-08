import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlusIcon from '@/assets/icons/PlusIcon';
import Header from '../../components/Header';
import FloatingMenu from '@/screens/home/components/FloatingMenu';
import { router } from 'expo-router';
import FlagBlock from '@/screens/home/components/FlagBlock';

const HomeScreen = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  const handleGoBack = () => {
    router.back();
  };
  const floatingMenu = [
    {
      icon: 'cards-outline',
      title: 'Add deck',
      onPress: () => router.push('/AddDeckScreen'),
    },
    {
      icon: 'folder',
      title: 'Add folder',
      onPress: () => router.push('/AddFolderScreen'),
    },
  ];

  return (
    <View style={styles.container}>
   
      <Header
        backIcon=""
        title="Chapter 1"
        actionMenuIcon={<PlusIcon />}
        onBackIconPress={handleGoBack}
        onActionMenuPress={() => setMenuVisible(!menuVisible)}
      />

      <FloatingMenu
        isVisible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        items={floatingMenu}
      />

      <FlagBlock />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 48,
  }
})

export default HomeScreen;