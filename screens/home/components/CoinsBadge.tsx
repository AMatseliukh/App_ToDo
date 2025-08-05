import Diamond from '@/assets/icons/Diamond';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CoinsBadge = () => {
  const bonusCount = 100;

  return (
    <View style={styles.wrapper}>
      <Diamond />
      <Text style={styles.text}>{bonusCount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    // width: 80,
    height: 36,
    borderRadius: 18,
    paddingHorizontal: 8,
    backgroundColor: '#f59e081a',
    borderColor: '#f59e08',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f59e08', 
  },
})

export default CoinsBadge;