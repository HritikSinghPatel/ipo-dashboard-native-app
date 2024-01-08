import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Import Icon from the library

// Header component with navigation and theme toggle functionality
const Header = ({ toggleTheme }) => {
  // Access the navigation object for navigating between screens
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Left side elements */}
      <View style={styles.headerLeft}>
        <TouchableOpacity>
          {/* Icon for search */}
          <Icon name="select-search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Right side elements */}
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          {/* Icon for toggling theme (brightness) */}
          <Icon name="brightness-7" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          {/* Icon for messages */}
          <Icon name="message-badge" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          {/* Icon for notifications (bell) */}
          <Icon name="bell-ring" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          {/* Icon for drag or additional actions */}
          <Icon name="drag-vertical" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleTheme} style={styles.icon}>
          {/* Icon for user account */}
          <Icon name="account" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Styles for the Header component
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#2c3e50', 
    width: '70%', 
    position: 'absolute',
    top: 0,
    left: '30%', 
    zIndex: 0, 
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 10,
  },
  headerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Header;
