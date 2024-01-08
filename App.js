import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './app/LoginScreen';
import RegistrationScreen from './app/RegistrationScreen';
import { ThemeProvider } from './app/context/ThemeContext';
import Layout from './app/home/Layout'
import NewsFetcher from './app/news/NewsFetcher.js';
import DashboardScreen from './app/home/DashboardScreen.js';
// import Dashboard from './app/home/Dashboard.js';


const Stack = createStackNavigator();

const App = () => {
  return (
    <ThemeProvider>
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={Layout}/>
        <Stack.Screen name="IPOs" component={DashboardScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Currency Exchange" component={NewsFetcher} />
      </Stack.Navigator>
    </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
