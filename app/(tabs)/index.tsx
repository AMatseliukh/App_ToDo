import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
// import { Icon } from 'react-native-paper';
import PlusIcon from '@/assets/icons/PlusIcon';
import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import Header from '../../components/Header';

const HomeScreen = () => {

  const [menuVisible, setMenuVisible] = useState(false);
  // const goBack = () => navigation.goBack();


  return (
    <View style={styles.container}>
   
      <Header
        backIcon={<ArrowLeftIcon />}
        title="Chapter 1"
        actionMenuIcon={<PlusIcon />}
        // onBackIconPress={() => goBack()}
        onActionMenuPress={() => setMenuVisible(!menuVisible)}
      />
      {/* {/* <Header */}
      {/* //   title="Назва екрана"
      //   backIcon={<Icon name="arrow-left" size={24} />}
      //   actionMenuIcon={<Icon name="add-circle-outline" size={24} />}
      //   onBackIconPress={() => goBack()}
      //   hideActionMenuIcon={true} */}
      {/* // /> */} 

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