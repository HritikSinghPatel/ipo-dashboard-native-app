import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Layout from './home/Layout'
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  // State variables to store email and password input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const navigation = useNavigation();

  // Function to handle login button press
  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    if(email=="hritik" && password=="hritik"){
      alert("Login Successfully");
      navigation.navigate("IPOs");
    }else{
      alert("Invalid Credentials");
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      {/* Login Screen Header */}
      <Text style={styles.header}>Login</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />

      {/* Login Button */}
      <Button title="Login" onPress={handleLogin} />

      {/* Register Text with Navigation Link */}
      <Text style={styles.registerText} onPress={() => navigation.navigate('Registration')}>
        Don't have an account? Register here
      </Text>
    </View>
  );
};

// Styles for the LoginScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1', 
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#2c3e50', 
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#3498db', 
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: '#2c3e50', 
  },
  registerText: {
    marginTop: 20,
    color: '#e74c3c', 
    textDecorationLine: 'underline', 
  },
});

export default LoginScreen;
