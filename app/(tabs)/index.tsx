import HomeScreen from '@/screens/home/HomeScreen';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const App = () => {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <HomeScreen />
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 12,
  }
})

export default App;
