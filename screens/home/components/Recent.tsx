import React, { FC, useEffect, useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import { Divider, IconButton } from 'react-native-paper';
import ListItem from './ListItem';

interface RecentItem {
  id: string;
  text: string;
  textDescr?: string;
  leadingElement?: string | null;
  trailingElement?: string | null;
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
              name={item.text}
              description={item.textDescr}
              leadingIconName={item.leadingElement}
              trailingIconName={item.trailingElement}
              onItemPress={() => alert(`Pressed: ${item.text}`)}
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
    paddingHorizontal: 16,
  },
  titleContainer: {
    flex: 1, 
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  divider: {
    marginRight: 48,
    backgroundColor: '#ccc',
  },
});

export default Recent;
