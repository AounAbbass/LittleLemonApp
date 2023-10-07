import * as React from 'react';
import { View, StyleSheet } from 'react-native';

 // Import a local component here
 import LittleLemonHeader from './components/LittleLemonHeader';

 export default function App() {
 return (
 <View
 style={styles.container}>
 <LittleLemonHeader />
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