import { useRouter } from 'expo-router';
import Fuse from 'fuse.js';
import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Easing,
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { ActivityIndicator, Divider } from 'react-native-paper';

import PlusIcon from '@/assets/icons/PlusIcon';
import { Colors } from '@/constants/Colors';
import FloatingMenu from '@/screens/home/components/FloatingMenu';
import Header from '../../components/Header';
import { folderStructure } from '../../dataFolder';
// import ListItem from './components/ListItem';
import Recent from './components/Recent';
import SearchInput from './components/SearchInput';
import ListItem from './components/ListItem';
// import Animated from 'react-native-reanimated';

const recentDecksGroupItemIndex = '1';
  const listItemsStartId = 5;
  const excludedIds = ['1', '2', '3', '4'];

  const recentItems = folderStructure.filter((item) => item.isRecentItem);
  const recentTitleItem = folderStructure.find(
    (item) => item.id === recentDecksGroupItemIndex,
  );
  const recentTitle = recentTitleItem?.name || 'Recent Deck';

  const listItems = folderStructure.filter(
  (item) => Number(item.id) >= listItemsStartId,
);

const fuse = new Fuse(folderStructure, {
  keys: ['name', 'textDescr'],
  threshold: 0.3, // чутливість
});

const HomeScreen = () => {

  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(folderStructure);
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);

  const handleGoBack = () => {
    router.back();
  };
  const flatListData = filteredData.filter(
    (item) => !excludedIds.includes(item.id),
  );

  // const flatListData = filteredData.filter(
  //   (item) => !excludedIds.includes(item.id) && Number(item.id) >= listItemsStartId,
  // );

  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(rotation, {
      toValue: expanded ? 1 : 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [expanded, rotation]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const animatedStyle = {
    transform: [{ rotate: rotateInterpolate }],
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      const filtered = folderStructure.filter(
        (item) => !excludedIds.includes(item.id),
      );
      setFilteredData(filtered);
    } else {
      const results = fuse.search(query).map((result) => result.item);
      const filtered = results.filter((item) => !excludedIds.includes(item.id));
      setFilteredData(filtered);
    }
  };

  // const recentContent = () => (
  //   <View style={{ paddingHorizontal: 8 }}>
  //           {/* Акордеон Recent */}
  //     <Pressable
  //       className="flex-row items-center justify-between h-20 w-full"
  //       onPress={() => setExpanded(!expanded)}
  //       >
  //       <Recent title={recentTitle} data={recentItems} />
  //       {/* <Pressable onPress={() => setExpanded(!expanded)}>
  //         <Animated.View style={animatedStyle}>
  //           <IconButton icon="arrow-left" size={24} />
  //         </Animated.View>
  //       </Pressable> */}
  //     </Pressable>

  //     {/* Accordion Items */}
  //       {expanded &&
  //       recentItems.map((item) => (
  //         <View key={item.id}>
  //           <ListItem
  //             name={item.name}
  //             description={item.textDescr}
  //             typeIconName={item.typeIcon}
  //             actionIconName={item.actionElement}
  //             onItemPress={() => alert(`Accordion item pressed: ${item.id}`)} type={'folder | deck | repository_folder | repository_deck'} childrenCount={0} isUnpublishedChangesPresent={false} isOutOfSync={false} isPublished={false}            />
  //         </View>
  //       ))}
  //   </View>
  // )

  const listItemContent = () => (
    <View style={{ paddingHorizontal: 8 }}>  
            {/* FlatList */}
      <FlatList
        data={flatListData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem
            name={item.name}
            description={item.childrenCount.toString() + ' ' + item.textDescr}
            itemStatus={item.folderDeckStatus}
            typeIconName={item.typeIcon}
            actionIconName={item.actionElement}
            onItemPress={() => alert(`Item pressed: ${item.id}`)} 
            type={'folder | deck | repository_folder | repository_deck'} 
            // childrenCount={0} 
            isUnpublishedChangesPresent={false} 
            isOutOfSync={false} 
            isPublished={false}         
          />
        )}
        scrollEnabled={false}
      />

    </View>
  )

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

      {/* {recentContent()}; */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Recent Deck</Text>
      </View>

      <SearchInput
        placeholder="Your search text"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>All Items</Text>
      </View>

      <Divider style={{ backgroundColor: 'gray' }} />

      {loading ? (
        <View style={styles.loaderWrapper}>
          <ActivityIndicator animating={true} size="large" />
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollWrapper}>
          {listItemContent()}
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
  titleContainer: {
    height: 80,
    paddingLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.h2,
  },
})

export default HomeScreen;
