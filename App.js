import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BodyText from './src/elements/BodyText';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar/>
      {/* <MemoListScreen/> */}
      {/* <MemoDetailScreen/> */}
      <MemoEditScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffdf6',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop:78,
  },
});
