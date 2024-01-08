// Layout.js
import Constants from 'expo-constants';
import React from 'react';
import Sidebar from './Sidebar';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Home from './Home';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: Constants.statusBarHeight }}>
    <View style={styles.container}>
      <Header />
      <Sidebar />
      <Home/>
      <View style={styles.content}>{children}</View>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
  },
  content: {
    flex: 1,
    padding: 10,
  },
});
export default Layout;
