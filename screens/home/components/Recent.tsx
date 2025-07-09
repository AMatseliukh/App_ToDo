import React, { FC, useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
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
}, [expanded]);

const animatedStyle = useAnimatedStyle(() => ({
  transform: [
    {
      rotate: `${rotation.value * 180}deg`,
    },
  ],
}));

  return (
    <View className="w-full">
      <Pressable
        className="flex-row items-center justify-between h-20 px-6"
        onPress={() => setExpanded(!expanded)}
      >
        <View className="justify-center items-center flex-1">
          <Text className="text-xl font-medium tracking-wide">{title}</Text>
        </View>
        <Animated.View style={animatedStyle}>
          <IconButton icon="chevron-down" size={24} />
        </Animated.View>
      </Pressable>

      <Divider className="mr-20" />

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
            <Divider className="mr-20" />
          </View>
        ))}
    </View>
  );
};

export default Recent;
