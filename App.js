import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
// import BodyText from './src/elements/BodyText';
import Appbar from './src/components/Appbar';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
 
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
 
// 3.x 系では、
// import { createAppContainer, createStackNavigator } from 'react-navigation';
// のようにしていましたが、パッケージが分離されたため、それぞれ個別で読み込む必要があります。
 
const App = createStackNavigator({
  Home: { screen: MemoListScreen },
}, {
  defaultNavigationOptions: {
    // ... オプション
  }
});
 
export default createAppContainer(App);

// // export default createAppContainer(App);
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Appbar/>
//       {/* <MemoListScreen/> */}
//       {/* <MemoDetailScreen/> */}
//       {/* <MemoEditScreen/> */}
//       {/* <LoginScreen/> */}
//       <SignupScreen/>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fffdf6',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop:78,
//   },
// });

// export default App;
// export default createAppContainer(App);