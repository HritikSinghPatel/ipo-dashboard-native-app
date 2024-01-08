// Sidebar.js
import React, { useState } from 'react';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Sidebar component
const Sidebar = () => {
  // Access the navigation object for navigating between screens
  const navigation = useNavigation();
  
  // State to toggle the display of icon names in the sidebar
  const [showIconNames, setShowIconNames] = useState(true);

  // Function to toggle the display of icon names
  const toggleIconNames = () => {
    setShowIconNames(!showIconNames);
  };

  // Function to navigate to a specific screen
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.sidebar}>
      {/* Sidebar Title */}
      <View style={styles.sidebarTitle}>
        <TouchableOpacity>
          <View style={styles.sidebarBrand}>
            {/* Stock Market Brand Icon */}
            <Icon name="chart-line" size={24} color="white" style={styles.iconHeader} />
            <Text style={styles.sidebarText}>Stock Market</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Toggle Icon Names Button */}
      <TouchableOpacity onPress={toggleIconNames} style={styles.menuIcon}>
        <Icon name="menu" size={24} color="white" />
      </TouchableOpacity>

      {/* Render sidebar items if showIconNames is true */}
      {showIconNames && (
        <View>
          {/* Home */}
          <TouchableOpacity onPress={() => navigateToScreen('Home')} style={styles.sidebarItem}>
            <Icon name="home" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Home</Text>
          </TouchableOpacity>

          {/* Dashboard */}
          <TouchableOpacity onPress={() => navigateToScreen('IPOs')} style={styles.sidebarItem}>
            <Icon name="archive" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Upcoming IPO Calender</Text>
          </TouchableOpacity>

          {/* Stocks & News */}
          <TouchableOpacity onPress={() => navigateToScreen('Currency Exchange')} style={styles.sidebarItem}>
            <Icon name="grid" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Currency Exchange</Text>
          </TouchableOpacity>

          {/* Login */}
          <TouchableOpacity onPress={() => navigateToScreen('Login')} style={styles.sidebarItem}>
            <Icon name="account" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Login</Text>
          </TouchableOpacity>

          {/* Register */}
          <TouchableOpacity onPress={() => navigateToScreen('Registration')} style={styles.sidebarItem}>
            <Icon name="lock" size={24} color="white" style={styles.icon} />
            <Text style={styles.sidebarText}>Register</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

// Styles for the Sidebar component
const styles = StyleSheet.create({
  sidebar: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 20,
    backgroundColor: '#2c3e50',
    width: '40%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 1,
  },
  menuIcon: {
    marginBottom: 20,
  },
  sidebarTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  sidebarBrand: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconHeader: {
    marginRight: 10,
  },
  sidebarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  sidebarText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Sidebar;
