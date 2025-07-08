import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-paper';

const FlagBlock = () => {
  return (
    <View style={styles.wrapper}>
      <View
        style={styles.content}
      >
        <Image
          style={styles.image}
          source={require('../../../assets/images/iconUnitedKingdom.png')}
          resizeMode="contain"
        />
        {/* <ArrowForward /> */}
        <Icon source="arrow-right" size={24} />
        <Image
          style={styles.image}
          source={require('../../../assets/images/iconUkraine.png')}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 100,
    gap: 18,
  },
  image: {
    width: 70,
    height: 50,
  },
})

export default FlagBlock;
