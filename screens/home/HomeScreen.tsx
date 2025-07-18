import { useRouter } from 'expo-router';
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
import FloatingMenu from '@/screens/home/components/FloatingMenu';
import Header from '../../components/Header';
import { folderStructure } from '../../dataFolder';
import ListItem from './components/ListItem';
import Recent from './components/Recent';
// import Animated from 'react-native-reanimated';

const recentDecksGroupItemIndex = '1';
  const listItemsStartId = 5;
  const excludedIds = ['1', '2', '3', '4'];

  const recentItems = folderStructure.filter((item) => item.isRecentItem);
  const recentTitleItem = folderStructure.find(
    (item) => item.id === recentDecksGroupItemIndex,
  );
  const recentTitle = recentTitleItem?.text || 'Recent Deck';

  const listItems = folderStructure.filter(
  (item) => Number(item.id) >= listItemsStartId,
);

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

  const recentContent = () => (
    <View style={{ paddingHorizontal: 8 }}>
            {/* Акордеон Recent */}
      <Pressable
        className="flex-row items-center justify-between h-20 w-full"
        onPress={() => setExpanded(!expanded)}
        >
        <Recent title={recentTitle} data={recentItems} />
        {/* <Pressable onPress={() => setExpanded(!expanded)}>
          <Animated.View style={animatedStyle}>
            <IconButton icon="arrow-left" size={24} />
          </Animated.View>
        </Pressable> */}
      </Pressable>

      {/* Accordion Items */}
        {expanded &&
        recentItems.map((item) => (
          <View key={item.id}>
            <ListItem
              name={item.text}
              description={item.textDescr}
              leadingIconName={item.leadingElement}
              trailingIconName={item.trailingElement}
              onItemPress={() => alert(`Accordion item pressed: ${item.id}`)}
            />
          </View>
        ))}

    </View>
  )

  const listItemContent = () => (
    <View style={{ paddingHorizontal: 8 }}>  
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

      {recentContent()};

      <View style={{
          height: 80,
          paddingLeft: 12,
          flexDirection: 'row',
          alignItems: 'center',
          // backgroundColor: '#cecece'
          // justifyContent: 'flex-start'
        }}>
        <Text style={
          {fontSize: 20,
          fontWeight: '600',        
          textAlign: 'left',}
        }>All Items</Text>
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
})

export default HomeScreen;
