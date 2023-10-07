import * as React from 'react';
import { View, StyleSheet } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';
 import WelcomeScreen from './WelcomeScreen';
 export default function App() {
 return (
 <View
 style={styles.container}>
 <LittleLemonHeader />
 <WelcomeScreen />
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