import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Diamond from '@/assets/icons/Diamond';

const BonusBadge = () => {
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
    // Тінь для iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // Тінь для Android
    // elevation: 4,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#f59e08', 
  },
})

export default BonusBadge;