import * as React from 'react';
import { View, StyleSheet } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';
 import LittleLemonFooter from './components/LittleLemonFooter';
 import WelcomeScreen from './WelcomeScreen';
 import MenuItems from './components/MenuItems';
 export default function App() {
 return (
 <View
 style={styles.container}>
 <LittleLemonHeader />
 <MenuItems />
 <View style={styles.footerContainer}>
  <LittleLemonFooter />
  </View>
 </View>
 );
 }

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});