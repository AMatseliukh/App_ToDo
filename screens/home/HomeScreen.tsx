import { useRouter } from 'expo-router';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import Header from '../../components/Header';
import FloatingMenu from './components/FloatingMenu';
// import SearchInput from './components/SearchInput';
import FlagBlock from '@/screens/home/components/FlagBlock';
import PlusIcon from '../../assets/icons/PlusIcon';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { folderStructure } from '@/dataFolder';
import ListItem from './components/ListItem';
import { ActivityIndicator } from 'react-native-paper';
import Recent from './components/Recent';



  // const handleGoBack = () => {
  //   router.back();
  // };

  const recentDecksGroupItemIndex = '1';
  const listItemsStartId = 5;
  const excludedIds = ['1', '2', '3', '4'];
  const recentItems = folderStructure.filter((item) => item.isRecentItem);
  const recentTitleItem = folderStructure.find(
    (item) => item.id === recentDecksGroupItemIndex,
  );
  const recentTitle = recentTitleItem?.text || 'Recent';

    const listItems = folderStructure.filter(
    (item) => Number(item.id) >= listItemsStartId,
  );

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(folderStructure);
  const [menuVisible, setMenuVisible] = useState(false);

  const rotation = useSharedValue(0);
  const router = useRouter();

  useEffect(() => {
    rotation.value = withTiming(expanded ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  }, [expanded]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // const handleSearch = (query: string) => {
  //   setSearchQuery(query);
  //   if (query.trim() === '') {
  //     const filtered = folderStructure.filter(
  //       (item) => !excludedIds.includes(item.id),
  //     );
  //     setFilteredData(filtered);
  //   } 
  //    else {
  //     const results = fuse.search(query).map((result) => result.item);
  //     const filtered = results.filter((item) => !excludedIds.includes(item.id));
  //     setFilteredData(filtered);
  //   }
  // };

  const flatListData = filteredData.filter(
    (item) => !excludedIds.includes(item.id),
  );

  const renderContent = () => (
    <View>
      {/* recent */}
      <Pressable
        onPress={() => setExpanded(!expanded)}
      >
        <Recent title={recentTitle} data={recentItems} />
      </Pressable> 

      {/* Recent Items */}
      {expanded &&
        recentItems.map((item) => (
          <View key={item.id}>
            <ListItem
              name={item.text}
              description={item.textDescr}
              leadingIconName={item.leadingElement}
              trailingIconName={item.trailingElement}
              onItemPress={() => alert(`Recent item pressed: ${item.id}`)}
            />
          </View>
        ))}

      {/* FlatList */}
      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <ListItem
              name={item.text}
              description={item.textDescr}
              leadingIconName={item.leadingElement}
              trailingIconName={item.trailingElement}
              align="left"
              onItemPress={() => alert(`Item pressed: ${item.id}`)}
            />
          </View>
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
        // onBackIconPress={handleGoBack}
        onActionMenuPress={() => setMenuVisible(!menuVisible)}
      />

      <FloatingMenu
        isVisible={menuVisible}
        onDismiss={() => setMenuVisible(false)}
        items={floatingMenu}
      />

      

      {loading ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
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
  }
})

export default HomeScreen;