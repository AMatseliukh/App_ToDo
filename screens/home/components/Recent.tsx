import React, { FC, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ListItem from './ListItem';
import { Colors } from '@/constants/Colors';

interface RecentItem {
  id: string;
  name: string;
  type: 'folder' | 'deck' | 'repository_folder' | 'repository_deck';
  childrenCount: string;
  isUnpublishedChangesPresent: boolean;
  isOutOfSync: boolean;
  isPublished: boolean;
  onItemPress?: () => void;
}

interface Props {
  title: string;
  data: RecentItem[];  
}

const Recent: FC<Props> = ({ title, data }) => {
  const [expanded, setExpanded] = useState(false);
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withTiming(expanded ? 1 : 0, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    });
  },[expanded, rotation]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotation.value * 180}deg` }],
  }));

  return (
    <View style={styles.wrapper}>
      <Pressable style={styles.header} onPress={() => setExpanded(!expanded)}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <Animated.View style={animatedStyle}>
          <IconButton icon="chevron-down" size={24} />
        </Animated.View>
      </Pressable>

      <Divider style={styles.divider} />

      {expanded &&
        data.map((item) => (
          <View key={item.id}>
            <ListItem
              name={item.name}
              author=''
              type={item.type} 
              childrenCount={item.childrenCount} 
              // itemStatus={item.itemStatus}
              // itemStatusColor={item.itemStatusColor}
              isUnpublishedChangesPresent={false} 
              isOutOfSync={false} 
              isPublished={false} 
              onItemPress={() => alert(`Pressed: ${item.name}`)}           
            />
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    marginBottom: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 64,
  },
  titleContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.h2,
  },
  divider: {
    marginRight: 48,
    backgroundColor: '#ccc',
  },
});

export default Recent;
