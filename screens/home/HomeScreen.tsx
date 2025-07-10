import React, { useEffect, useState } from 'react';
import { View,
  FlatList,
  ScrollView,
  StyleSheet, } from 'react-native';
import PlusIcon from '@/assets/icons/PlusIcon';
import Header from '../../components/Header';
import FloatingMenu from '@/screens/home/components/FloatingMenu';
import { useRouter } from 'expo-router';
import { folderStructure } from '../../dataFolder'
import ListItem from './components/ListItem';
import Recent from './components/Recent';
import { ActivityIndicator } from 'react-native-paper';

const HomeScreen = () => {

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(folderStructure);
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleGoBack = () => {
    router.back();
  };

  const recentDecksGroupItemIndex = '1';
  const listItemsStartId = 5;
  const excludedIds = ['1', '2', '3', '4'];

    const recentItems = folderStructure.filter((item) => item.isrecentItem);
  const recentTitleItem = folderStructure.find(
    (item) => item.id === recentDecksGroupItemIndex,
  );
  const recentTitle = recentTitleItem?.text || 'Recent';

  const flatListData = filteredData.filter(
    (item) => !excludedIds.includes(item.id) && Number(item.id) >= listItemsStartId,
  );

  const renderContent = () => (
    <View style={{ paddingHorizontal: 8 }}>
      {/* Акордеон Recent */}
      <Recent title={recentTitle} data={recentItems} />

      {/* FlatList */}
      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            name={item.text}
            description={item.textDescr}
            leadingIconName={item.leadingElement}
            trailingIconName={item.trailingElement}
            align="left"
            onItemPress={() => alert(`Item pressed: ${item.id}`)}
          />
        )}
        scrollEnabled={false}
      />
    </View>
  );

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

      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollWrapper}>
          {renderContent()}
        </ScrollView>
      )}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: 48,
  },
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollWrapper: {
    flexGrow: 1,
  },
})

export default HomeScreen;